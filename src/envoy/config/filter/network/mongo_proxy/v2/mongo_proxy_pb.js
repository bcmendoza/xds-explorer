/* eslint-disable */

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

var envoy_config_filter_fault_v2_fault_pb = require('./envoy/config/filter/fault/v2/fault_pb.js');
goog.object.extend(proto, envoy_config_filter_fault_v2_fault_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy', null, global);
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
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.displayName = 'proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy';
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
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    statPrefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accessLog: jspb.Message.getFieldWithDefault(msg, 2, ""),
    delay: (f = msg.getDelay()) && envoy_config_filter_fault_v2_fault_pb.FaultDelay.toObject(includeInstance, f),
    emitDynamicMetadata: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy;
  return proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessLog(value);
      break;
    case 3:
      var value = new envoy_config_filter_fault_v2_fault_pb.FaultDelay;
      reader.readMessage(value,envoy_config_filter_fault_v2_fault_pb.FaultDelay.deserializeBinaryFromReader);
      msg.setDelay(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmitDynamicMetadata(value);
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
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccessLog();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDelay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_config_filter_fault_v2_fault_pb.FaultDelay.serializeBinaryToWriter
    );
  }
  f = message.getEmitDynamicMetadata();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string stat_prefix = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.getStatPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.setStatPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string access_log = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.getAccessLog = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.setAccessLog = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional envoy.config.filter.fault.v2.FaultDelay delay = 3;
 * @return {?proto.envoy.config.filter.fault.v2.FaultDelay}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.getDelay = function() {
  return /** @type{?proto.envoy.config.filter.fault.v2.FaultDelay} */ (
    jspb.Message.getWrapperField(this, envoy_config_filter_fault_v2_fault_pb.FaultDelay, 3));
};


/** @param {?proto.envoy.config.filter.fault.v2.FaultDelay|undefined} value */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.setDelay = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.clearDelay = function() {
  this.setDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.hasDelay = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool emit_dynamic_metadata = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.getEmitDynamicMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.mongo_proxy.v2.MongoProxy.prototype.setEmitDynamicMetadata = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.envoy.config.filter.network.mongo_proxy.v2);
