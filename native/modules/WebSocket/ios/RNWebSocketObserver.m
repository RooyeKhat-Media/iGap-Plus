/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "RNWebSocketObserver.h"

#import <React/RCTConvert.h>
#import <React/RCTDefines.h>
#import <React/RCTLog.h>
#import <React/RCTUtils.h>

#import "RNReconnectingWebSocket.h"

#if RCT_DEV // Only supported in dev mode

@interface RNWebSocketObserver () <RNWebSocketProtocolDelegate>
@end

@implementation RNWebSocketObserver {
  RNReconnectingWebSocket *_socket;
}

@synthesize delegate = _delegate;

- (instancetype)initWithURL:(NSURL *)url
{
  if (self = [super init]) {
    _socket = [[RNReconnectingWebSocket alloc] initWithURL:url];
    _socket.delegate = self;
  }
  return self;
}

- (void)start
{
  _socket.delegate = self;
  [_socket start];
}

- (void)stop
{
  [_socket stop];
}

- (void)webSocket:(RNSRWebSocket *)webSocket didReceiveMessage:(id)message
{
  if (_delegate) {
    NSError *error = nil;
    NSDictionary<NSString *, id> *msg = RCTJSONParse(message, &error);

    if (!error) {
      [_delegate didReceiveWebSocketMessage:msg];
    } else {
      RCTLogError(@"WebSocketManager failed to parse message with error %@\n<message>\n%@\n</message>", error, message);
    }
  }
}

@end

#endif
