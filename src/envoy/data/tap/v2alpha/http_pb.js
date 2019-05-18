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
var envoy_data_tap_v2alpha_common_pb = require('./envoy/data/tap/v2alpha/common_pb.js');
goog.object.extend(proto, envoy_data_tap_v2alpha_common_pb);
goog.exportSymbol('proto.envoy.data.tap.v2alpha.HttpBufferedTrace', null, global);
goog.exportSymbol('proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message', null, global);
goog.exportSymbol('proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment', null, global);
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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.data.tap.v2alpha.HttpBufferedTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.tap.v2alpha.HttpBufferedTrace.displayName = 'proto.envoy.data.tap.v2alpha.HttpBufferedTrace';
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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.repeatedFields_, null);
};
goog.inherits(proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.displayName = 'proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message';
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
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_);
};
goog.inherits(proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.displayName = 'proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment';
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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.tap.v2alpha.HttpBufferedTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: (f = msg.getRequest()) && proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.toObject(includeInstance, f)
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
 * @return {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.tap.v2alpha.HttpBufferedTrace;
  return proto.envoy.data.tap.v2alpha.HttpBufferedTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message;
      reader.readMessage(value,proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 2:
      var value = new proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message;
      reader.readMessage(value,proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.deserializeBinaryFromReader);
      msg.setResponse(value);
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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.tap.v2alpha.HttpBufferedTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.repeatedFields_ = [1,3];



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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    envoy_api_v2_core_base_pb.HeaderValue.toObject, includeInstance),
    body: (f = msg.getBody()) && envoy_data_tap_v2alpha_common_pb.Body.toObject(includeInstance, f),
    trailersList: jspb.Message.toObjectList(msg.getTrailersList(),
    envoy_api_v2_core_base_pb.HeaderValue.toObject, includeInstance)
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
 * @return {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message;
  return proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_base_pb.HeaderValue;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValue.deserializeBinaryFromReader);
      msg.addHeaders(value);
      break;
    case 2:
      var value = new envoy_data_tap_v2alpha_common_pb.Body;
      reader.readMessage(value,envoy_data_tap_v2alpha_common_pb.Body.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 3:
      var value = new envoy_api_v2_core_base_pb.HeaderValue;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderValue.deserializeBinaryFromReader);
      msg.addTrailers(value);
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
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      envoy_api_v2_core_base_pb.HeaderValue.serializeBinaryToWriter
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_data_tap_v2alpha_common_pb.Body.serializeBinaryToWriter
    );
  }
  f = message.getTrailersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      envoy_api_v2_core_base_pb.HeaderValue.serializeBinaryToWriter
    );
  }
};


/**
 * repeated envoy.api.v2.core.HeaderValue headers = 1;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValue>}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValue, 1));
};


/** @param {!Array<!proto.envoy.api.v2.core.HeaderValue>} value */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.setHeadersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValue}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.api.v2.core.HeaderValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.clearHeadersList = function() {
  this.setHeadersList([]);
};


/**
 * optional Body body = 2;
 * @return {?proto.envoy.data.tap.v2alpha.Body}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.getBody = function() {
  return /** @type{?proto.envoy.data.tap.v2alpha.Body} */ (
    jspb.Message.getWrapperField(this, envoy_data_tap_v2alpha_common_pb.Body, 2));
};


/** @param {?proto.envoy.data.tap.v2alpha.Body|undefined} value */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.setBody = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.clearBody = function() {
  this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated envoy.api.v2.core.HeaderValue trailers = 3;
 * @return {!Array<!proto.envoy.api.v2.core.HeaderValue>}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.getTrailersList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.HeaderValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_base_pb.HeaderValue, 3));
};


/** @param {!Array<!proto.envoy.api.v2.core.HeaderValue>} value */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.setTrailersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.envoy.api.v2.core.HeaderValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.HeaderValue}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.addTrailers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.envoy.api.v2.core.HeaderValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message.prototype.clearTrailersList = function() {
  this.setTrailersList([]);
};


/**
 * optional Message request = 1;
 * @return {?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.getRequest = function() {
  return /** @type{?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message} */ (
    jspb.Message.getWrapperField(this, proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message, 1));
};


/** @param {?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message|undefined} value */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.setRequest = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.clearRequest = function() {
  this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Message response = 2;
 * @return {?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.getResponse = function() {
  return /** @type{?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message} */ (
    jspb.Message.getWrapperField(this, proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message, 2));
};


/** @param {?proto.envoy.data.tap.v2alpha.HttpBufferedTrace.Message|undefined} value */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.setResponse = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.clearResponse = function() {
  this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpBufferedTrace.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_ = [[2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.MessagePieceCase = {
  MESSAGE_PIECE_NOT_SET: 0,
  REQUEST_HEADERS: 2,
  REQUEST_BODY_CHUNK: 3,
  REQUEST_TRAILERS: 4,
  RESPONSE_HEADERS: 5,
  RESPONSE_BODY_CHUNK: 6,
  RESPONSE_TRAILERS: 7
};

/**
 * @return {proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.MessagePieceCase}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getMessagePieceCase = function() {
  return /** @type {proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.MessagePieceCase} */(jspb.Message.computeOneofCase(this, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0]));
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
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.toObject = function(includeInstance, msg) {
  var f, obj = {
    traceId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    requestHeaders: (f = msg.getRequestHeaders()) && envoy_api_v2_core_base_pb.HeaderMap.toObject(includeInstance, f),
    requestBodyChunk: (f = msg.getRequestBodyChunk()) && envoy_data_tap_v2alpha_common_pb.Body.toObject(includeInstance, f),
    requestTrailers: (f = msg.getRequestTrailers()) && envoy_api_v2_core_base_pb.HeaderMap.toObject(includeInstance, f),
    responseHeaders: (f = msg.getResponseHeaders()) && envoy_api_v2_core_base_pb.HeaderMap.toObject(includeInstance, f),
    responseBodyChunk: (f = msg.getResponseBodyChunk()) && envoy_data_tap_v2alpha_common_pb.Body.toObject(includeInstance, f),
    responseTrailers: (f = msg.getResponseTrailers()) && envoy_api_v2_core_base_pb.HeaderMap.toObject(includeInstance, f)
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
 * @return {!proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment;
  return proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTraceId(value);
      break;
    case 2:
      var value = new envoy_api_v2_core_base_pb.HeaderMap;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderMap.deserializeBinaryFromReader);
      msg.setRequestHeaders(value);
      break;
    case 3:
      var value = new envoy_data_tap_v2alpha_common_pb.Body;
      reader.readMessage(value,envoy_data_tap_v2alpha_common_pb.Body.deserializeBinaryFromReader);
      msg.setRequestBodyChunk(value);
      break;
    case 4:
      var value = new envoy_api_v2_core_base_pb.HeaderMap;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderMap.deserializeBinaryFromReader);
      msg.setRequestTrailers(value);
      break;
    case 5:
      var value = new envoy_api_v2_core_base_pb.HeaderMap;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderMap.deserializeBinaryFromReader);
      msg.setResponseHeaders(value);
      break;
    case 6:
      var value = new envoy_data_tap_v2alpha_common_pb.Body;
      reader.readMessage(value,envoy_data_tap_v2alpha_common_pb.Body.deserializeBinaryFromReader);
      msg.setResponseBodyChunk(value);
      break;
    case 7:
      var value = new envoy_api_v2_core_base_pb.HeaderMap;
      reader.readMessage(value,envoy_api_v2_core_base_pb.HeaderMap.deserializeBinaryFromReader);
      msg.setResponseTrailers(value);
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
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTraceId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRequestHeaders();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      envoy_api_v2_core_base_pb.HeaderMap.serializeBinaryToWriter
    );
  }
  f = message.getRequestBodyChunk();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      envoy_data_tap_v2alpha_common_pb.Body.serializeBinaryToWriter
    );
  }
  f = message.getRequestTrailers();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      envoy_api_v2_core_base_pb.HeaderMap.serializeBinaryToWriter
    );
  }
  f = message.getResponseHeaders();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      envoy_api_v2_core_base_pb.HeaderMap.serializeBinaryToWriter
    );
  }
  f = message.getResponseBodyChunk();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      envoy_data_tap_v2alpha_common_pb.Body.serializeBinaryToWriter
    );
  }
  f = message.getResponseTrailers();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      envoy_api_v2_core_base_pb.HeaderMap.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 trace_id = 1;
 * @return {number}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getTraceId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setTraceId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional envoy.api.v2.core.HeaderMap request_headers = 2;
 * @return {?proto.envoy.api.v2.core.HeaderMap}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getRequestHeaders = function() {
  return /** @type{?proto.envoy.api.v2.core.HeaderMap} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.HeaderMap, 2));
};


/** @param {?proto.envoy.api.v2.core.HeaderMap|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setRequestHeaders = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearRequestHeaders = function() {
  this.setRequestHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasRequestHeaders = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Body request_body_chunk = 3;
 * @return {?proto.envoy.data.tap.v2alpha.Body}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getRequestBodyChunk = function() {
  return /** @type{?proto.envoy.data.tap.v2alpha.Body} */ (
    jspb.Message.getWrapperField(this, envoy_data_tap_v2alpha_common_pb.Body, 3));
};


/** @param {?proto.envoy.data.tap.v2alpha.Body|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setRequestBodyChunk = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearRequestBodyChunk = function() {
  this.setRequestBodyChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasRequestBodyChunk = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional envoy.api.v2.core.HeaderMap request_trailers = 4;
 * @return {?proto.envoy.api.v2.core.HeaderMap}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getRequestTrailers = function() {
  return /** @type{?proto.envoy.api.v2.core.HeaderMap} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.HeaderMap, 4));
};


/** @param {?proto.envoy.api.v2.core.HeaderMap|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setRequestTrailers = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearRequestTrailers = function() {
  this.setRequestTrailers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasRequestTrailers = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional envoy.api.v2.core.HeaderMap response_headers = 5;
 * @return {?proto.envoy.api.v2.core.HeaderMap}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getResponseHeaders = function() {
  return /** @type{?proto.envoy.api.v2.core.HeaderMap} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.HeaderMap, 5));
};


/** @param {?proto.envoy.api.v2.core.HeaderMap|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setResponseHeaders = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearResponseHeaders = function() {
  this.setResponseHeaders(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasResponseHeaders = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Body response_body_chunk = 6;
 * @return {?proto.envoy.data.tap.v2alpha.Body}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getResponseBodyChunk = function() {
  return /** @type{?proto.envoy.data.tap.v2alpha.Body} */ (
    jspb.Message.getWrapperField(this, envoy_data_tap_v2alpha_common_pb.Body, 6));
};


/** @param {?proto.envoy.data.tap.v2alpha.Body|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setResponseBodyChunk = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearResponseBodyChunk = function() {
  this.setResponseBodyChunk(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasResponseBodyChunk = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional envoy.api.v2.core.HeaderMap response_trailers = 7;
 * @return {?proto.envoy.api.v2.core.HeaderMap}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.getResponseTrailers = function() {
  return /** @type{?proto.envoy.api.v2.core.HeaderMap} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.HeaderMap, 7));
};


/** @param {?proto.envoy.api.v2.core.HeaderMap|undefined} value */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.setResponseTrailers = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.clearResponseTrailers = function() {
  this.setResponseTrailers(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.tap.v2alpha.HttpStreamedTraceSegment.prototype.hasResponseTrailers = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.envoy.data.tap.v2alpha);
