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

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.config.filter.http.buffer.v2.Buffer', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.buffer.v2.BufferPerRoute', null, global);
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
proto.envoy.config.filter.http.buffer.v2.Buffer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.buffer.v2.Buffer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.buffer.v2.Buffer.displayName = 'proto.envoy.config.filter.http.buffer.v2.Buffer';
}
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
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_);
};
goog.inherits(proto.envoy.config.filter.http.buffer.v2.BufferPerRoute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.displayName = 'proto.envoy.config.filter.http.buffer.v2.BufferPerRoute';
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
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.buffer.v2.Buffer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.buffer.v2.Buffer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxRequestBytes: (f = msg.getMaxRequestBytes()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.buffer.v2.Buffer}
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.buffer.v2.Buffer;
  return proto.envoy.config.filter.http.buffer.v2.Buffer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.buffer.v2.Buffer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.buffer.v2.Buffer}
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxRequestBytes(value);
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
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.buffer.v2.Buffer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.buffer.v2.Buffer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxRequestBytes();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value max_request_bytes = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.getMaxRequestBytes = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.setMaxRequestBytes = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.clearMaxRequestBytes = function() {
  this.setMaxRequestBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.buffer.v2.Buffer.prototype.hasMaxRequestBytes = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.OverrideCase = {
  OVERRIDE_NOT_SET: 0,
  DISABLED: 1,
  BUFFER: 2
};

/**
 * @return {proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.OverrideCase}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.getOverrideCase = function() {
  return /** @type {proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.OverrideCase} */(jspb.Message.computeOneofCase(this, proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_[0]));
};



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
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.buffer.v2.BufferPerRoute} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.toObject = function(includeInstance, msg) {
  var f, obj = {
    disabled: jspb.Message.getFieldWithDefault(msg, 1, false),
    buffer: (f = msg.getBuffer()) && proto.envoy.config.filter.http.buffer.v2.Buffer.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.buffer.v2.BufferPerRoute}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.buffer.v2.BufferPerRoute;
  return proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.buffer.v2.BufferPerRoute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.buffer.v2.BufferPerRoute}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisabled(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.buffer.v2.Buffer;
      reader.readMessage(value,proto.envoy.config.filter.http.buffer.v2.Buffer.deserializeBinaryFromReader);
      msg.setBuffer(value);
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
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.buffer.v2.BufferPerRoute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getBuffer();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.buffer.v2.Buffer.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool disabled = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.getDisabled = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.setDisabled = function(value) {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.clearDisabled = function() {
  jspb.Message.setOneofField(this, 1, proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.hasDisabled = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Buffer buffer = 2;
 * @return {?proto.envoy.config.filter.http.buffer.v2.Buffer}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.getBuffer = function() {
  return /** @type{?proto.envoy.config.filter.http.buffer.v2.Buffer} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.buffer.v2.Buffer, 2));
};


/** @param {?proto.envoy.config.filter.http.buffer.v2.Buffer|undefined} value */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.setBuffer = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.clearBuffer = function() {
  this.setBuffer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.buffer.v2.BufferPerRoute.prototype.hasBuffer = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.http.buffer.v2);
