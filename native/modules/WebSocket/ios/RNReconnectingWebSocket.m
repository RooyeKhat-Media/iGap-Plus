/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "RNReconnectingWebSocket.h"

#import <React/RCTConvert.h>
#import <React/RCTDefines.h>

#import "RNSRWebSocket.h"

#if RCT_DEV // Only supported in dev mode

@interface RNReconnectingWebSocket () <RNSRWebSocketDelegate>
@end

@implementation RNReconnectingWebSocket {
  NSURL *_url;
  RNSRWebSocket *_socket;
}

@synthesize delegate = _delegate;

- (instancetype)initWithURL:(NSURL *)url
{
  if (self = [super init]) {
    _url = url;
  }
  return self;
}

- (void)send:(id)data
{
  [_socket send:data];
}

- (void)start
{
  [self stop];
  _socket = [[RNSRWebSocket alloc] initWithURL:_url];
  _socket.delegate = self;

  [_socket open];
}

- (void)stop
{
  _socket.delegate = nil;
  [_socket closeWithCode:1000 reason:@"Invalidated"];
  _socket = nil;
}

- (void)webSocket:(RNSRWebSocket *)webSocket didReceiveMessage:(id)message
{
  if (_delegate) {
    [_delegate webSocket:webSocket didReceiveMessage:message];
  }
}

- (void)reconnect
{
  __weak RNSRWebSocket *socket = _socket;
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    // Only reconnect if the observer wasn't stoppped while we were waiting
    if (socket) {
      [self start];
    }
  });
}

- (void)webSocket:(RNSRWebSocket *)webSocket didFailWithError:(NSError *)error
{
  [self reconnect];
}

- (void)webSocket:(RNSRWebSocket *)webSocket didCloseWithCode:(NSInteger)code reason:(NSString *)reason wasClean:(BOOL)wasClean
{
  [self reconnect];
}

@end

#endif
