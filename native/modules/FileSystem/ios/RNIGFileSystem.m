#import "RNIGFileSystem.h"
#import <React/RCTConvert.h>
#import <CommonCrypto/CommonDigest.h>
#import <CommonCrypto/CommonCryptor.h>

#define IDIOM UI_USER_INTERFACE_IDIOM()
#define IPAD  UIUserInterfaceIdiomPad

#define ERROR_NO_DATA @"ERROR_NO_DATA"
#define ERROR_FATAL   @"ERROR_FATAL"

#define FILE_MODE_OPEN_READ  0
#define FILE_MODE_OPEN_WRITE 1

#pragma mark - RNFile
@interface RNFile : NSObject
@property (nonatomic, strong) NSString* uri;
@property (nonatomic) int refId;
@property (nonatomic, strong) NSData* data;
@end
@implementation RNFile
-(instancetype) initWithId:(int)refId andUri:(NSString*)uri andData:(NSData*)data {
    self = [super init];
    if (self) {
        self.uri = uri;
        self.refId = refId;
        self.data = data;
    }
    return self;
}

+(instancetype) fileWithId:(int)refId andUri:(NSString*)uri loadData:(BOOL)loadData {
    RNFile *file = [RNFile new];
    file.uri = uri;
    file.refId = refId;
    NSError *error;
    file.data = [NSData dataWithContentsOfFile:uri options:NSDataReadingMappedIfSafe error:&error];
    if (loadData && error != nil) {
        return nil;
    }
    return file;
}
@end


#pragma mark - RNIGFileSystem
@interface RNIGFileSystem() <UIDocumentMenuDelegate, UIDocumentPickerDelegate, UINavigationControllerDelegate, UIImagePickerControllerDelegate> {
    
}
@end

@implementation RNIGFileSystem {
    RCTPromiseResolveBlock currentResolveCallBack;
    RCTPromiseRejectBlock  currentRejectCallBack;
    BOOL currentResolveCallBackShouldBeArray;
    NSMutableDictionary<NSNumber*, RNFile*>* files;
    int lastUid;
}

- (instancetype)init {
    if ((self = [super init])) {
        files = [[NSMutableDictionary alloc] init];
        currentResolveCallBackShouldBeArray = NO;
        lastUid = 0;
    }
    return self;
}

RCT_EXPORT_MODULE()
dispatch_queue_t backgroundQueue() {
    static dispatch_once_t queueCreationGuard;
    static dispatch_queue_t queue;
    dispatch_once(&queueCreationGuard, ^{
        queue = dispatch_queue_create("rNIGFileSystem.Queue", 0);
    });
    return queue;
}

- (dispatch_queue_t)methodQueue {
    return dispatch_get_main_queue();
}

- (NSDictionary *)constantsToExport {
    return @{ @"read":  [NSNumber numberWithInt:FILE_MODE_OPEN_READ],
              @"write": [NSNumber numberWithInt:FILE_MODE_OPEN_WRITE]
              };
}

RCT_EXPORT_METHOD(filePicker:(NSString *)fileType resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    currentResolveCallBackShouldBeArray = NO;
    if ([fileType  isEqual:@"public.content"]) {
        [self presentFilePickerWithType:@"public.content" resolve:resolve reject:reject returnArray:NO];
    } else if ([fileType  isEqual:@"public.audio"]) {
        [self presentFilePickerWithType:@"public.audio" resolve:resolve reject:reject returnArray:NO];
    } else if ([fileType  isEqual:@"public.image"]) {
        [self presentMediaPickerWithType:@"public.image" resolve:resolve reject:reject returnArray:NO];
    } else if ([fileType  isEqual:@"public.movie"]) {
        [self presentMediaPickerWithType:@"public.movie" resolve:resolve reject:reject returnArray:NO];
    }
}

RCT_EXPORT_METHOD(filesPicker:(NSString *)fileType resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    currentResolveCallBackShouldBeArray = YES;
    if ([fileType  isEqual:@"public.content"]) {
        [self presentFilePickerWithType:@"public.content" resolve:resolve reject:reject returnArray:YES];
    } else if ([fileType  isEqual:@"public.audio"]) {
        [self presentFilePickerWithType:@"public.audio" resolve:resolve reject:reject returnArray:YES];
    } else if ([fileType  isEqual:@"public.image"]) {
        [self presentMediaPickerWithType:@"public.image" resolve:resolve reject:reject returnArray:YES];
    } else if ([fileType  isEqual:@"public.movie"]) {
        [self presentMediaPickerWithType:@"public.movie" resolve:resolve reject:reject returnArray:YES];
    }
}

RCT_EXPORT_METHOD(fInfo:(NSString *)fileUri resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    NSError* error = nil;
    NSDictionary *fileDictionary = [[NSFileManager defaultManager] attributesOfItemAtPath:fileUri error: &error];
    if (error == nil) {
        NSNumber *size = [fileDictionary objectForKey:NSFileSize];
        resolve(@{@"fileUri":fileUri,
                  @"fileName":fileUri.lastPathComponent,
                  @"fileSize":[size stringValue]
                  });
    } else {
        reject(ERROR_NO_DATA, @"fInfo: failed to fetch file info", error);
    }
}

RCT_EXPORT_METHOD(fOpen:(NSString *)fileUri mode:(int)mode resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    @try {
        BOOL loadData = YES;
        if (mode == FILE_MODE_OPEN_WRITE) {
            loadData = NO;
        }
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
            lastUid++;
            RNFile *file = [RNFile fileWithId:lastUid andUri:fileUri loadData:loadData];
            [files setObject:file forKey:[NSNumber numberWithInt:file.refId]];
            dispatch_async(dispatch_get_main_queue(), ^{
                resolve([NSNumber numberWithInt:file.refId]);
            });
        });
    }
    @catch (NSException * e){
        reject(e.name, e.description, nil);
    }
    
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        
        dispatch_async(dispatch_get_main_queue(), ^{
            
        });
    });

}

RCT_EXPORT_METHOD(fRead:(NSInteger)refId offset:(NSString *)offset limit:(int)limit resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    RNFile *file = [files objectForKey:[NSNumber numberWithInteger:refId]];
    if (file != nil) {
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
            NSData *data = [file.data subdataWithRange:NSMakeRange(offset.intValue, limit)];
            NSString *base64 = [data base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
            dispatch_async(dispatch_get_main_queue(), ^{
                resolve(base64);
            });
        });
        
        
    } else {
        reject(ERROR_NO_DATA, @"fRead: file does not exists", nil);
    }
}

RCT_EXPORT_METHOD(fSha256:(NSInteger)refId resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    RNFile *file = [files objectForKey:[NSNumber numberWithInteger:refId]];
    if (file != nil) {
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
            unsigned char result[CC_SHA256_DIGEST_LENGTH];
            CC_SHA256([file.data bytes], (int)[file.data length], result);
            NSData *data = [NSData dataWithBytes:result length:CC_SHA256_DIGEST_LENGTH];
            NSString *a = [data base64EncodedStringWithOptions:(NSDataBase64EncodingOptions)0];
            dispatch_async(dispatch_get_main_queue(), ^{
                resolve(a);
            });
        });
    } else {
        reject(ERROR_NO_DATA, @"fSha256: file does not exists", nil);
    }
}

RCT_EXPORT_METHOD(fAppend:(NSInteger)refId base64String:(NSString *)base64String resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        RNFile *file = [files objectForKey:[NSNumber numberWithInteger:refId]];
        NSMutableData *mutableData = [NSMutableData dataWithData:file.data];
        [mutableData appendData:[[NSData alloc] initWithBase64EncodedString:base64String options:(NSDataBase64DecodingOptions)0]];
        file.data = mutableData;
        NSError *error = nil;
        [file.data writeToFile:file.uri options:NSDataWritingAtomic error:&error];
        dispatch_async(dispatch_get_main_queue(), ^{
            if (error == nil) {
                resolve(@"");
            } else {
                reject(ERROR_FATAL, @"Could not write to file", nil);
            }
        });
    });            
}

RCT_EXPORT_METHOD(fClose:(NSInteger)refId resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    [files removeObjectForKey:[NSNumber numberWithInteger:refId]];
    resolve(nil);
}

RCT_EXPORT_METHOD(getFilesDir:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    resolve([self documentsDirectory]);
}

#pragma mark Private methods


#pragma mark File Picker
-(void) presentFilePickerWithType:(NSString*)fileType resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject returnArray:(BOOL)returnArray{
    NSArray *allowedUTIs = @[fileType];
    UIDocumentMenuViewController *documentPicker = [[UIDocumentMenuViewController alloc] initWithDocumentTypes:(NSArray *)allowedUTIs inMode:UIDocumentPickerModeImport];
    
    currentResolveCallBack = resolve;
    currentRejectCallBack  = reject;
    
    documentPicker.delegate = self;
    documentPicker.modalPresentationStyle = UIModalPresentationFormSheet;
    
    UIViewController *rootViewController = [[[[UIApplication sharedApplication]delegate] window] rootViewController];
    
    if ( IDIOM == IPAD ) {
        NSNumber *top = [NSNumber numberWithInt:2]; //[RCTConvert NSNumber:options[@"top"]];
        NSNumber *left = [NSNumber numberWithInt:2]; //[RCTConvert NSNumber:options[@"left"]];
        [documentPicker.popoverPresentationController setSourceRect: CGRectMake([left floatValue], [top floatValue], 0, 0)];
        [documentPicker.popoverPresentationController setSourceView: rootViewController.view];
    }
    
    [rootViewController presentViewController:documentPicker animated:YES completion:nil];
}


#pragma mark UIDocumentMenuDelegate
- (void)documentMenu:(UIDocumentMenuViewController *)documentMenu didPickDocumentPicker:(UIDocumentPickerViewController *)documentPicker {
    documentPicker.delegate = self;
    documentPicker.modalPresentationStyle = UIModalPresentationFormSheet;
    
    UIViewController *rootViewController = [[[[UIApplication sharedApplication]delegate] window] rootViewController];
    
    //    while (rootViewController.modalViewController) {
    //        rootViewController = rootViewController.modalViewController;
    //    }
    if ( IDIOM == IPAD ) {
        [documentPicker.popoverPresentationController setSourceRect: CGRectMake(rootViewController.view.frame.size.width/2, rootViewController.view.frame.size.height - rootViewController.view.frame.size.height / 6, 0, 0)];
        [documentPicker.popoverPresentationController setSourceView: rootViewController.view];
    }
    
    [rootViewController presentViewController:documentPicker animated:YES completion:nil];
}

- (void)documentMenuWasCancelled:(UIDocumentMenuViewController *)documentMenu {
    currentRejectCallBack(ERROR_NO_DATA, @"", nil);
}

#pragma mark UIDocumentPickerDelegate
- (void)documentPicker:(UIDocumentPickerViewController *)controller didPickDocumentAtURL:(NSURL *)url {
    [self documentPicker:controller didPickDocumentsAtURLs:@[url]];
}

- (void)documentPicker:(UIDocumentPickerViewController *)controller didPickDocumentsAtURLs:(nonnull NSArray<NSURL *> *)urls {
    if (controller.documentPickerMode == UIDocumentPickerModeImport) {
        NSURL *url = urls.firstObject;
        [url startAccessingSecurityScopedResource];
        
        NSFileCoordinator *coordinator = [[NSFileCoordinator alloc] init];
        __block NSError *error;
        
        [coordinator coordinateReadingItemAtURL:url options:NSFileCoordinatorReadingResolvesSymbolicLink error:&error byAccessor:^(NSURL *newURL) {
            NSMutableDictionary* result = [NSMutableDictionary dictionary];
            
            [result setValue:newURL.absoluteString forKey:@"fileUri"];
            [result setValue:[newURL lastPathComponent] forKey:@"fileName"];
            
            NSError *attributesError = nil;
            NSDictionary *fileAttributes = [[NSFileManager defaultManager] attributesOfItemAtPath:newURL.path error:&attributesError];
            if(!attributesError) {
                NSNumber *size = [fileAttributes objectForKey:NSFileSize];
                 [result setValue:size.stringValue forKey:@"fileSize"];
            } else {
                NSLog(@"%@", attributesError);
            }
            
            //create a random folder
            //copy file from temp to folder
            //create s RNFile
            NSError *copyError;
            NSString *newFolder = [self createARandromFolder];
            NSString *filePath = [newFolder stringByAppendingString:@"/"];
            filePath = [filePath stringByAppendingString:[newURL lastPathComponent]];
            if (newFolder != nil) {
                [[NSFileManager defaultManager] copyItemAtPath:url.path toPath:filePath error:&copyError];
                if (copyError == nil) {
                    [result setValue:filePath forKey:@"fileUri"];
                    if (currentResolveCallBackShouldBeArray) {
                        currentResolveCallBack(@[result]);
                    } else {
                        currentResolveCallBack(result);
                    }
                } else {
                    //Could not copy imported file to the newly created folder
                    currentRejectCallBack(ERROR_FATAL, @"", nil);
                }
            } else {
                //Could not create folder eventhough there is no folder with this name
                currentRejectCallBack(ERROR_FATAL, @"", nil);
            }
        }];
        
        [url stopAccessingSecurityScopedResource];
    }
}

- (void)documentPickerWasCancelled:(UIDocumentPickerViewController *)controller {
    currentRejectCallBack(ERROR_NO_DATA, @"", nil);
}

-(NSString*) createARandromFolder {
    NSString *folderName = [self randomStringWithLength:16];
    NSString *dataPath = [[self documentsDirectory] stringByAppendingPathComponent:folderName];
    if (![[NSFileManager defaultManager] fileExistsAtPath:dataPath]){
        NSError* error;
        if( [[NSFileManager defaultManager] createDirectoryAtPath:dataPath withIntermediateDirectories:NO attributes:nil error:&error]) {
            return dataPath;
        } else {
            return nil;
        }
    } else {
        return [self createARandromFolder];
    }
}
         

#pragma mark Media Picker
-(void) presentMediaPickerWithType:(NSString*)fileType resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject returnArray:(BOOL)returnArray{
    currentResolveCallBack = resolve;
    currentRejectCallBack  = reject;
    UIImagePickerController *imagePicker = [[UIImagePickerController alloc] init];
    imagePicker.delegate = self;
    imagePicker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    imagePicker.mediaTypes = @[fileType];
    
    UIViewController *rootViewController = [[[[UIApplication sharedApplication]delegate] window] rootViewController];
    
    if ( IDIOM == IPAD ) {
        [imagePicker.popoverPresentationController setSourceRect: CGRectMake(rootViewController.view.frame.size.width/2, rootViewController.view.frame.size.height - rootViewController.view.frame.size.height / 6, 0, 0)];
        [imagePicker.popoverPresentationController setSourceView: rootViewController.view];
    }
    
    [rootViewController presentViewController:imagePicker animated:YES completion:nil];
}

- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info {
    NSString *mediaType = [info objectForKey: UIImagePickerControllerMediaType];
    
    if ([mediaType isEqualToString:@"public.image"]) {
        UIImage *image  = (UIImage*)[info objectForKey:UIImagePickerControllerOriginalImage];
        //NSURL *imageUrl = (NSURL*)[info objectForKey:UIImagePickerControllerMediaURL];
        //NSString *filename = imageUrl.lastPathComponent;
        
        NSData *imageData = UIImagePNGRepresentation(image);
        if (imageData != nil) {
            //create a random folder
            //copy file from temp to folder
            //create s RNFile
            NSString *newFolder = [self createARandromFolder];
            if (newFolder != nil) {
                NSString *imagePath = [newFolder stringByAppendingString:@"/image.png"];
                [imageData writeToFile:imagePath atomically:YES];
                NSError *attributesError = nil;
                NSDictionary *fileAttributes = [[NSFileManager defaultManager] attributesOfItemAtPath:imagePath error:&attributesError];
                NSMutableDictionary* result = [NSMutableDictionary dictionary];
                if(!attributesError) {
                    NSNumber *size = [fileAttributes objectForKey:NSFileSize];
                    [result setValue:size.stringValue forKey:@"fileSize"];
                    [result setValue:[imagePath lastPathComponent] forKey:@"fileName"];
                    [result setValue:imagePath forKey:@"fileUri"];
                    if (currentResolveCallBackShouldBeArray) {
                        currentResolveCallBack(@[result]);
                    } else {
                        currentResolveCallBack(result);
                    }
                } else {
                    //Could not copy imported image to the newly created folder
                    currentRejectCallBack(ERROR_FATAL, @"", nil);
                }
            } else {
                //Could not create folder eventhough there is no folder with this name
                currentRejectCallBack(ERROR_FATAL, @"", nil);
            }
        } else {
            currentRejectCallBack(ERROR_NO_DATA, @"", nil);
        }
    } else if ([mediaType isEqualToString:@"public.movie"]) {
        NSURL *videoUrl = (NSURL*)[info objectForKey:UIImagePickerControllerMediaURL];
        NSData *videoData = [NSData dataWithContentsOfURL:videoUrl];
        if (videoData != nil) {
            //create a random folder
            //copy file from temp to folder
            //create s RNFile
            NSString *newFolder = [self createARandromFolder];
            if (newFolder != nil) {
                NSString *imagePath = [newFolder stringByAppendingString:@"/video.mp4"];
                [videoData writeToFile:imagePath atomically:YES];
                NSError *attributesError = nil;
                NSDictionary *fileAttributes = [[NSFileManager defaultManager] attributesOfItemAtPath:imagePath error:&attributesError];
                NSMutableDictionary* result = [NSMutableDictionary dictionary];
                if(!attributesError) {
                    NSNumber *size = [fileAttributes objectForKey:NSFileSize];
                    [result setValue:size.stringValue forKey:@"fileSize"];
                    [result setValue:[imagePath lastPathComponent] forKey:@"fileName"];
                    [result setValue:imagePath forKey:@"fileUri"];
                    if (currentResolveCallBackShouldBeArray) {
                        currentResolveCallBack(@[result]);
                    } else {
                        currentResolveCallBack(result);
                    }
                } else {
                    //Could not copy imported image to the newly created folder
                    currentRejectCallBack(ERROR_FATAL, @"", nil);
                }
            } else {
                //Could not create folder eventhough there is no folder with this name
                currentRejectCallBack(ERROR_FATAL, @"", nil);
            }
        } else {
            currentRejectCallBack(ERROR_NO_DATA, @"", nil);
        }
    } else {
        currentRejectCallBack(ERROR_NO_DATA, @"", nil);
    }
    
    [picker dismissViewControllerAnimated:true completion:nil];
}

- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker {
    [picker dismissViewControllerAnimated:true completion:nil];
    currentRejectCallBack(ERROR_NO_DATA, @"", nil);
}




#pragma mark Helper functions
-(NSString *) randomStringWithLength: (int) len {
    NSString *letters = @"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    NSMutableString *randomString = [NSMutableString stringWithCapacity: len];
    for (int i=0; i<len; i++) {
        [randomString appendFormat: @"%C", [letters characterAtIndex: arc4random_uniform([letters length])]];
    }
    return randomString;
}

-(NSString*) documentsDirectory {
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    return [paths objectAtIndex:0];
}

@end
  
