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

var envoy_service_tap_v2alpha_common_pb = require('./envoy/service/tap/v2alpha/common_pb.js');
goog.object.extend(proto, envoy_service_tap_v2alpha_common_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.admin.v2alpha.TapRequest', null, global);
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
proto.envoy.admin.v2alpha.TapRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.admin.v2alpha.TapRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.admin.v2alpha.TapRequest.displayName = 'proto.envoy.admin.v2alpha.TapRequest';
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
proto.envoy.admin.v2alpha.TapRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.admin.v2alpha.TapRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.admin.v2alpha.TapRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.TapRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    configId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tapConfig: (f = msg.getTapConfig()) && envoy_service_tap_v2alpha_common_pb.TapConfig.toObject(includeInstance, f)
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
 * @return {!proto.envoy.admin.v2alpha.TapRequest}
 */
proto.envoy.admin.v2alpha.TapRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.admin.v2alpha.TapRequest;
  return proto.envoy.admin.v2alpha.TapRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.admin.v2alpha.TapRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.admin.v2alpha.TapRequest}
 */
proto.envoy.admin.v2alpha.TapRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigId(value);
      break;
    case 2:
      var value = new envoy_service_tap_v2alpha_common_pb.TapConfig;
      reader.readMessage(value,envoy_service_tap_v2alpha_common_pb.TapConfig.deserializeBinaryFromReader);
      msg.setTapConfig(value);
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
proto.envoy.admin.v2alpha.TapRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.admin.v2alpha.TapRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.admin.v2alpha.TapRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.admin.v2alpha.TapRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfigId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTapConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_service_tap_v2alpha_common_pb.TapConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string config_id = 1;
 * @return {string}
 */
proto.envoy.admin.v2alpha.TapRequest.prototype.getConfigId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.admin.v2alpha.TapRequest.prototype.setConfigId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional envoy.service.tap.v2alpha.TapConfig tap_config = 2;
 * @return {?proto.envoy.service.tap.v2alpha.TapConfig}
 */
proto.envoy.admin.v2alpha.TapRequest.prototype.getTapConfig = function() {
  return /** @type{?proto.envoy.service.tap.v2alpha.TapConfig} */ (
    jspb.Message.getWrapperField(this, envoy_service_tap_v2alpha_common_pb.TapConfig, 2));
};


/** @param {?proto.envoy.service.tap.v2alpha.TapConfig|undefined} value */
proto.envoy.admin.v2alpha.TapRequest.prototype.setTapConfig = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.admin.v2alpha.TapRequest.prototype.clearTapConfig = function() {
  this.setTapConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.admin.v2alpha.TapRequest.prototype.hasTapConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.admin.v2alpha);
