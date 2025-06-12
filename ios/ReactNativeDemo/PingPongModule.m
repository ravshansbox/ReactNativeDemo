#import "PingPongModule.h"
#import <React/RCTLog.h>

@implementation PingPongModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(send:(NSString *)input
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    RCTLogInfo(@"Received input: %@", input);
    resolve(@"bye from ios");
}

@end
