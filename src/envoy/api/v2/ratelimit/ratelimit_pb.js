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

var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.ratelimit.RateLimitDescriptor', null, global);
goog.exportSymbol('proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry', null, global);
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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.ratelimit.RateLimitDescriptor.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.ratelimit.RateLimitDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.ratelimit.RateLimitDescriptor.displayName = 'proto.envoy.api.v2.ratelimit.RateLimitDescriptor';
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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.displayName = 'proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.repeatedFields_ = [1];



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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.ratelimit.RateLimitDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.toObject, includeInstance)
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
 * @return {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.ratelimit.RateLimitDescriptor;
  return proto.envoy.api.v2.ratelimit.RateLimitDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry;
      reader.readMessage(value,proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.deserializeBinaryFromReader);
      msg.addEntries(value);
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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.ratelimit.RateLimitDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.serializeBinaryToWriter
    );
  }
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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry;
  return proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Entry entries = 1;
 * @return {!Array<!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry>}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry, 1));
};


/** @param {!Array<!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry>} value */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.setEntriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry}
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.api.v2.ratelimit.RateLimitDescriptor.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.api.v2.ratelimit.RateLimitDescriptor.prototype.clearEntriesList = function() {
  this.setEntriesList([]);
};


goog.object.extend(exports, proto.envoy.api.v2.ratelimit);
