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
goog.exportSymbol('proto.envoy.config.filter.http.gzip.v2.Gzip', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy', null, global);
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
proto.envoy.config.filter.http.gzip.v2.Gzip = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.gzip.v2.Gzip.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.gzip.v2.Gzip, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.gzip.v2.Gzip.displayName = 'proto.envoy.config.filter.http.gzip.v2.Gzip';
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
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.displayName = 'proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.repeatedFields_ = [6];



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
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.gzip.v2.Gzip.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.toObject = function(includeInstance, msg) {
  var f, obj = {
    memoryLevel: (f = msg.getMemoryLevel()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    contentLength: (f = msg.getContentLength()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    compressionLevel: jspb.Message.getFieldWithDefault(msg, 3, 0),
    compressionStrategy: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contentTypeList: jspb.Message.getRepeatedField(msg, 6),
    disableOnEtagHeader: jspb.Message.getFieldWithDefault(msg, 7, false),
    removeAcceptEncodingHeader: jspb.Message.getFieldWithDefault(msg, 8, false),
    windowBits: (f = msg.getWindowBits()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.gzip.v2.Gzip;
  return proto.envoy.config.filter.http.gzip.v2.Gzip.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMemoryLevel(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setContentLength(value);
      break;
    case 3:
      var value = /** @type {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum} */ (reader.readEnum());
      msg.setCompressionLevel(value);
      break;
    case 4:
      var value = /** @type {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy} */ (reader.readEnum());
      msg.setCompressionStrategy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addContentType(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableOnEtagHeader(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemoveAcceptEncodingHeader(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setWindowBits(value);
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
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.gzip.v2.Gzip.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemoryLevel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getContentLength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getCompressionLevel();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getCompressionStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getContentTypeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getDisableOnEtagHeader();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRemoveAcceptEncodingHeader();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getWindowBits();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy = {
  DEFAULT: 0,
  FILTERED: 1,
  HUFFMAN: 2,
  RLE: 3
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
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel;
  return proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum = {
  DEFAULT: 0,
  BEST: 1,
  SPEED: 2
};

/**
 * optional google.protobuf.UInt32Value memory_level = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getMemoryLevel = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setMemoryLevel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.clearMemoryLevel = function() {
  this.setMemoryLevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.hasMemoryLevel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value content_length = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getContentLength = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setContentLength = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.clearContentLength = function() {
  this.setContentLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.hasContentLength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CompressionLevel.Enum compression_level = 3;
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getCompressionLevel = function() {
  return /** @type {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionLevel.Enum} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setCompressionLevel = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional CompressionStrategy compression_strategy = 4;
 * @return {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getCompressionStrategy = function() {
  return /** @type {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.envoy.config.filter.http.gzip.v2.Gzip.CompressionStrategy} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setCompressionStrategy = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * repeated string content_type = 6;
 * @return {!Array<string>}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getContentTypeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/** @param {!Array<string>} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setContentTypeList = function(value) {
  jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.addContentType = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.clearContentTypeList = function() {
  this.setContentTypeList([]);
};


/**
 * optional bool disable_on_etag_header = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getDisableOnEtagHeader = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setDisableOnEtagHeader = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool remove_accept_encoding_header = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getRemoveAcceptEncodingHeader = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setRemoveAcceptEncodingHeader = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional google.protobuf.UInt32Value window_bits = 9;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.getWindowBits = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 9));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.setWindowBits = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.clearWindowBits = function() {
  this.setWindowBits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.gzip.v2.Gzip.prototype.hasWindowBits = function() {
  return jspb.Message.getField(this, 9) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.http.gzip.v2);
