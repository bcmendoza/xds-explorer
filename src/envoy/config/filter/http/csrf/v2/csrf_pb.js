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

var envoy_api_v2_core_base_pb = require('./envoy/api/v2/core/base_pb.js');
goog.object.extend(proto, envoy_api_v2_core_base_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.config.filter.http.csrf.v2.CsrfPolicy', null, global);
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
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.csrf.v2.CsrfPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.displayName = 'proto.envoy.config.filter.http.csrf.v2.CsrfPolicy';
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
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.csrf.v2.CsrfPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    filterEnabled: (f = msg.getFilterEnabled()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f),
    shadowEnabled: (f = msg.getShadowEnabled()) && envoy_api_v2_core_base_pb.RuntimeFractionalPercent.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.csrf.v2.CsrfPolicy}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.csrf.v2.CsrfPolicy;
  return proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.csrf.v2.CsrfPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.csrf.v2.CsrfPolicy}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setFilterEnabled(value);
      break;
    case 2:
      var value = new envoy_api_v2_core_base_pb.RuntimeFractionalPercent;
      reader.readMessage(value,envoy_api_v2_core_base_pb.RuntimeFractionalPercent.deserializeBinaryFromReader);
      msg.setShadowEnabled(value);
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
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.csrf.v2.CsrfPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilterEnabled();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
  f = message.getShadowEnabled();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_base_pb.RuntimeFractionalPercent.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent filter_enabled = 1;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.getFilterEnabled = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 1));
};


/** @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.setFilterEnabled = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.clearFilterEnabled = function() {
  this.setFilterEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.hasFilterEnabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional envoy.api.v2.core.RuntimeFractionalPercent shadow_enabled = 2;
 * @return {?proto.envoy.api.v2.core.RuntimeFractionalPercent}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.getShadowEnabled = function() {
  return /** @type{?proto.envoy.api.v2.core.RuntimeFractionalPercent} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.RuntimeFractionalPercent, 2));
};


/** @param {?proto.envoy.api.v2.core.RuntimeFractionalPercent|undefined} value */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.setShadowEnabled = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.clearShadowEnabled = function() {
  this.setShadowEnabled(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.csrf.v2.CsrfPolicy.prototype.hasShadowEnabled = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.http.csrf.v2);