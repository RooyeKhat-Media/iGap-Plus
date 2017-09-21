
#import "RNFileSystem.h"

@implementation RNFileSystem

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(filePicker:(NSString *)fileType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(filesPicker:(NSString *)fileType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}


RCT_EXPORT_METHOD(fOpen:(NSString *)fileUri
                  mode:(int) mode
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(fRead:(NSInteger) refId
                  offset:(double) offset
                  limit:(int) limit
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(fSha256:(NSInteger)refId
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(fAppend:(NSInteger) refId
                  base64String:(NSString *)base64String
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(fClose:(NSInteger) refId
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    
}

RCT_EXPORT_METHOD(getFilesDir:
                  (RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    NSArray *paths = NSSearchPathForDirectoriesInDomains(NSApplicationSupportDirectory, NSUserDomainMask, YES);
    NSString *applicationSupportDirectory = [paths firstObject];
    resolve(applicationSupportDirectory);
}

@end
  
