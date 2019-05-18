/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var envoy_config_common_tap_v2alpha_common_pb = require('./envoy/config/common/tap/v2alpha/common_pb.js');
goog.object.extend(proto, envoy_config_common_tap_v2alpha_common_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.filter.http.tap.v2alpha.Tap', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.tap.v2alpha.Tap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.tap.v2alpha.Tap.displayName = 'proto.envoy.config.filter.http.tap.v2alpha.Tap';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.tap.v2alpha.Tap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.tap.v2alpha.Tap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonConfig: (f = msg.getCommonConfig()) && envoy_config_common_tap_v2alpha_common_pb.CommonExtensionConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.config.filter.http.tap.v2alpha.Tap}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.tap.v2alpha.Tap;
  return proto.envoy.config.filter.http.tap.v2alpha.Tap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.tap.v2alpha.Tap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.tap.v2alpha.Tap}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_config_common_tap_v2alpha_common_pb.CommonExtensionConfig;
      reader.readMessage(value,envoy_config_common_tap_v2alpha_common_pb.CommonExtensionConfig.deserializeBinaryFromReader);
      msg.setCommonConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.tap.v2alpha.Tap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.tap.v2alpha.Tap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_config_common_tap_v2alpha_common_pb.CommonExtensionConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.config.common.tap.v2alpha.CommonExtensionConfig common_config = 1;
 * @return {?proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.getCommonConfig = function() {
  return /** @type{?proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig} */ (
    jspb.Message.getWrapperField(this, envoy_config_common_tap_v2alpha_common_pb.CommonExtensionConfig, 1));
};


/** @param {?proto.envoy.config.common.tap.v2alpha.CommonExtensionConfig|undefined} value */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.setCommonConfig = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.clearCommonConfig = function() {
  this.setCommonConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.tap.v2alpha.Tap.prototype.hasCommonConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.http.tap.v2alpha);
