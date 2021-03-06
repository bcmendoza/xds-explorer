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

var envoy_config_ratelimit_v2_rls_pb = require('./envoy/config/ratelimit/v2/rls_pb.js');
goog.object.extend(proto, envoy_config_ratelimit_v2_rls_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit', null, global);
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
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.displayName = 'proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit';
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
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    domain: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stage: jspb.Message.getFieldWithDefault(msg, 2, 0),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    failureModeDeny: jspb.Message.getFieldWithDefault(msg, 4, false),
    rateLimitService: (f = msg.getRateLimitService()) && envoy_config_ratelimit_v2_rls_pb.RateLimitServiceConfig.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit;
  return proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStage(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailureModeDeny(value);
      break;
    case 5:
      var value = new envoy_config_ratelimit_v2_rls_pb.RateLimitServiceConfig;
      reader.readMessage(value,envoy_config_ratelimit_v2_rls_pb.RateLimitServiceConfig.deserializeBinaryFromReader);
      msg.setRateLimitService(value);
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
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStage();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFailureModeDeny();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getRateLimitService();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      envoy_config_ratelimit_v2_rls_pb.RateLimitServiceConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string domain = 1;
 * @return {string}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.setDomain = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 stage = 2;
 * @return {number}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.getStage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.setStage = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.setTimeout = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.clearTimeout = function() {
  this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool failure_mode_deny = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.getFailureModeDeny = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.setFailureModeDeny = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional envoy.config.ratelimit.v2.RateLimitServiceConfig rate_limit_service = 5;
 * @return {?proto.envoy.config.ratelimit.v2.RateLimitServiceConfig}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.getRateLimitService = function() {
  return /** @type{?proto.envoy.config.ratelimit.v2.RateLimitServiceConfig} */ (
    jspb.Message.getWrapperField(this, envoy_config_ratelimit_v2_rls_pb.RateLimitServiceConfig, 5));
};


/** @param {?proto.envoy.config.ratelimit.v2.RateLimitServiceConfig|undefined} value */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.setRateLimitService = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.clearRateLimitService = function() {
  this.setRateLimitService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.thrift.rate_limit.v2alpha1.RateLimit.prototype.hasRateLimitService = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.thrift.rate_limit.v2alpha1);
