/**
 * This code was generated by [react-native-codegen](https://www.npmjs.com/package/react-native-codegen).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 * @generated by codegen project: GenerateModuleObjCpp
 *
 * We create an umbrella header (and corresponding implementation) here since
 * Cxx compilation in BUCK has a limitation: source-code producing genrule()s
 * must have a single output. More files => more genrule()s => slower builds.
 */

#ifndef __cplusplus
#error This file must be compiled as Obj-C++. If you are importing it, you must change your file extension to .mm.
#endif

// Avoid multiple includes of RNSimpleToastSpec symbols
#ifndef RNSimpleToastSpec_H
#define RNSimpleToastSpec_H

#import <Foundation/Foundation.h>
#import <RCTRequired/RCTRequired.h>
#import <RCTTypeSafety/RCTConvertHelpers.h>
#import <RCTTypeSafety/RCTTypedModuleConstants.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTCxxConvert.h>
#import <React/RCTManagedPointer.h>
#import <ReactCommon/RCTTurboModule.h>
#import <optional>
#import <vector>

namespace JS {
  namespace NativeSimpleToast {
    struct Constants {

      struct Builder {
        struct Input {
          RCTRequired<double> SHORT;
          RCTRequired<double> LONG;
          RCTRequired<double> TOP;
          RCTRequired<double> BOTTOM;
          RCTRequired<double> CENTER;
        };

        /** Initialize with a set of values */
        Builder(const Input i);
        /** Initialize with an existing Constants */
        Builder(Constants i);
        /** Builds the object. Generally used only by the infrastructure. */
        NSDictionary *buildUnsafeRawValue() const { return _factory(); };
      private:
        NSDictionary *(^_factory)(void);
      };

      static Constants fromUnsafeRawValue(NSDictionary *const v) { return {v}; }
      NSDictionary *unsafeRawValue() const { return _v; }
    private:
      Constants(NSDictionary *const v) : _v(v) {}
      NSDictionary *_v;
    };
  }
}
@protocol NativeSimpleToastSpec <RCTBridgeModule, RCTTurboModule>

- (void)show:(NSString *)message
    duration:(double)duration
     options:(NSDictionary *)options;
- (void)showWithGravity:(NSString *)message
               duration:(double)duration
                gravity:(double)gravity
                options:(NSDictionary *)options;
- (void)showWithGravityAndOffset:(NSString *)message
                        duration:(double)duration
                         gravity:(double)gravity
                         xOffset:(double)xOffset
                         yOffset:(double)yOffset
                         options:(NSDictionary *)options;
- (facebook::react::ModuleConstants<JS::NativeSimpleToast::Constants::Builder>)constantsToExport;
- (facebook::react::ModuleConstants<JS::NativeSimpleToast::Constants::Builder>)getConstants;

@end

@interface NativeSimpleToastSpecBase : NSObject {
@protected
facebook::react::EventEmitterCallback _eventEmitterCallback;
}
- (void)setEventEmitterCallback:(EventEmitterCallbackWrapper *)eventEmitterCallbackWrapper;


@end

namespace facebook::react {
  /**
   * ObjC++ class for module 'NativeSimpleToast'
   */
  class JSI_EXPORT NativeSimpleToastSpecJSI : public ObjCTurboModule {
  public:
    NativeSimpleToastSpecJSI(const ObjCTurboModule::InitParams &params);
  };
} // namespace facebook::react
inline JS::NativeSimpleToast::Constants::Builder::Builder(const Input i) : _factory(^{
  NSMutableDictionary *d = [NSMutableDictionary new];
  auto SHORT = i.SHORT.get();
  d[@"SHORT"] = @(SHORT);
  auto LONG = i.LONG.get();
  d[@"LONG"] = @(LONG);
  auto TOP = i.TOP.get();
  d[@"TOP"] = @(TOP);
  auto BOTTOM = i.BOTTOM.get();
  d[@"BOTTOM"] = @(BOTTOM);
  auto CENTER = i.CENTER.get();
  d[@"CENTER"] = @(CENTER);
  return d;
}) {}
inline JS::NativeSimpleToast::Constants::Builder::Builder(Constants i) : _factory(^{
  return i.unsafeRawValue();
}) {}
#endif // RNSimpleToastSpec_H
