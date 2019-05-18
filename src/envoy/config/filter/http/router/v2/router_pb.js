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

var envoy_config_filter_accesslog_v2_accesslog_pb = require('./envoy/config/filter/accesslog/v2/accesslog_pb.js');
goog.object.extend(proto, envoy_config_filter_accesslog_v2_accesslog_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
goog.exportSymbol('proto.envoy.config.filter.http.router.v2.Router', null, global);
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
proto.envoy.config.filter.http.router.v2.Router = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.router.v2.Router.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.router.v2.Router, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.router.v2.Router.displayName = 'proto.envoy.config.filter.http.router.v2.Router';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.router.v2.Router.repeatedFields_ = [3];



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
proto.envoy.config.filter.http.router.v2.Router.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.router.v2.Router.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.router.v2.Router} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.router.v2.Router.toObject = function(includeInstance, msg) {
  var f, obj = {
    dynamicStats: (f = msg.getDynamicStats()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    startChildSpan: jspb.Message.getFieldWithDefault(msg, 2, false),
    upstreamLogList: jspb.Message.toObjectList(msg.getUpstreamLogList(),
    envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.toObject, includeInstance),
    suppressEnvoyHeaders: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.envoy.config.filter.http.router.v2.Router}
 */
proto.envoy.config.filter.http.router.v2.Router.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.router.v2.Router;
  return proto.envoy.config.filter.http.router.v2.Router.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.router.v2.Router} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.router.v2.Router}
 */
proto.envoy.config.filter.http.router.v2.Router.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setDynamicStats(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStartChildSpan(value);
      break;
    case 3:
      var value = new envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog;
      reader.readMessage(value,envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.deserializeBinaryFromReader);
      msg.addUpstreamLog(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuppressEnvoyHeaders(value);
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
proto.envoy.config.filter.http.router.v2.Router.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.router.v2.Router.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.router.v2.Router} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.router.v2.Router.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDynamicStats();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getStartChildSpan();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUpstreamLogList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog.serializeBinaryToWriter
    );
  }
  f = message.getSuppressEnvoyHeaders();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.BoolValue dynamic_stats = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.getDynamicStats = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.config.filter.http.router.v2.Router.prototype.setDynamicStats = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.clearDynamicStats = function() {
  this.setDynamicStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.hasDynamicStats = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool start_child_span = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.getStartChildSpan = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.router.v2.Router.prototype.setStartChildSpan = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated envoy.config.filter.accesslog.v2.AccessLog upstream_log = 3;
 * @return {!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.getUpstreamLogList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_config_filter_accesslog_v2_accesslog_pb.AccessLog, 3));
};


/** @param {!Array<!proto.envoy.config.filter.accesslog.v2.AccessLog>} value */
proto.envoy.config.filter.http.router.v2.Router.prototype.setUpstreamLogList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.config.filter.accesslog.v2.AccessLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.accesslog.v2.AccessLog}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.addUpstreamLog = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.config.filter.accesslog.v2.AccessLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.clearUpstreamLogList = function() {
  this.setUpstreamLogList([]);
};


/**
 * optional bool suppress_envoy_headers = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.router.v2.Router.prototype.getSuppressEnvoyHeaders = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.router.v2.Router.prototype.setSuppressEnvoyHeaders = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


goog.object.extend(exports, proto.envoy.config.filter.http.router.v2);
