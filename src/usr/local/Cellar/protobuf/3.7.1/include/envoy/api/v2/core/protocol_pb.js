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

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.api.v2.core.GrpcProtocolOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.Http1ProtocolOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.Http2ProtocolOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.HttpProtocolOptions', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.TcpProtocolOptions', null, global);
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
proto.envoy.api.v2.core.TcpProtocolOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.TcpProtocolOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.TcpProtocolOptions.displayName = 'proto.envoy.api.v2.core.TcpProtocolOptions';
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
proto.envoy.api.v2.core.HttpProtocolOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.HttpProtocolOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.HttpProtocolOptions.displayName = 'proto.envoy.api.v2.core.HttpProtocolOptions';
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
proto.envoy.api.v2.core.Http1ProtocolOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.Http1ProtocolOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.Http1ProtocolOptions.displayName = 'proto.envoy.api.v2.core.Http1ProtocolOptions';
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
proto.envoy.api.v2.core.Http2ProtocolOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.Http2ProtocolOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.Http2ProtocolOptions.displayName = 'proto.envoy.api.v2.core.Http2ProtocolOptions';
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
proto.envoy.api.v2.core.GrpcProtocolOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.GrpcProtocolOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.GrpcProtocolOptions.displayName = 'proto.envoy.api.v2.core.GrpcProtocolOptions';
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
proto.envoy.api.v2.core.TcpProtocolOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.TcpProtocolOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.TcpProtocolOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.TcpProtocolOptions.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.core.TcpProtocolOptions}
 */
proto.envoy.api.v2.core.TcpProtocolOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.TcpProtocolOptions;
  return proto.envoy.api.v2.core.TcpProtocolOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.TcpProtocolOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.TcpProtocolOptions}
 */
proto.envoy.api.v2.core.TcpProtocolOptions.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.core.TcpProtocolOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.TcpProtocolOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.TcpProtocolOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.TcpProtocolOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.HttpProtocolOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.HttpProtocolOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.HttpProtocolOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    idleTimeout: (f = msg.getIdleTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.HttpProtocolOptions}
 */
proto.envoy.api.v2.core.HttpProtocolOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.HttpProtocolOptions;
  return proto.envoy.api.v2.core.HttpProtocolOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.HttpProtocolOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.HttpProtocolOptions}
 */
proto.envoy.api.v2.core.HttpProtocolOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setIdleTimeout(value);
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
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.HttpProtocolOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.HttpProtocolOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.HttpProtocolOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdleTimeout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration idle_timeout = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.getIdleTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.setIdleTimeout = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.clearIdleTimeout = function() {
  this.setIdleTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.HttpProtocolOptions.prototype.hasIdleTimeout = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.Http1ProtocolOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.Http1ProtocolOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowAbsoluteUrl: (f = msg.getAllowAbsoluteUrl()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    acceptHttp10: jspb.Message.getFieldWithDefault(msg, 2, false),
    defaultHostForHttp10: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.api.v2.core.Http1ProtocolOptions}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.Http1ProtocolOptions;
  return proto.envoy.api.v2.core.Http1ProtocolOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.Http1ProtocolOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.Http1ProtocolOptions}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setAllowAbsoluteUrl(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAcceptHttp10(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultHostForHttp10(value);
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
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.Http1ProtocolOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.Http1ProtocolOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowAbsoluteUrl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAcceptHttp10();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getDefaultHostForHttp10();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.BoolValue allow_absolute_url = 1;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.getAllowAbsoluteUrl = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 1));
};


/** @param {?proto.google.protobuf.BoolValue|undefined} value */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.setAllowAbsoluteUrl = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.clearAllowAbsoluteUrl = function() {
  this.setAllowAbsoluteUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.hasAllowAbsoluteUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool accept_http_10 = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.getAcceptHttp10 = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.setAcceptHttp10 = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string default_host_for_http_10 = 3;
 * @return {string}
 */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.getDefaultHostForHttp10 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.api.v2.core.Http1ProtocolOptions.prototype.setDefaultHostForHttp10 = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.Http2ProtocolOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.Http2ProtocolOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    hpackTableSize: (f = msg.getHpackTableSize()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    maxConcurrentStreams: (f = msg.getMaxConcurrentStreams()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    initialStreamWindowSize: (f = msg.getInitialStreamWindowSize()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    initialConnectionWindowSize: (f = msg.getInitialConnectionWindowSize()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    allowConnect: jspb.Message.getFieldWithDefault(msg, 5, false),
    allowMetadata: jspb.Message.getFieldWithDefault(msg, 6, false)
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
 * @return {!proto.envoy.api.v2.core.Http2ProtocolOptions}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.Http2ProtocolOptions;
  return proto.envoy.api.v2.core.Http2ProtocolOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.Http2ProtocolOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.Http2ProtocolOptions}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setHpackTableSize(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxConcurrentStreams(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setInitialStreamWindowSize(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setInitialConnectionWindowSize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowConnect(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowMetadata(value);
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
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.Http2ProtocolOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.Http2ProtocolOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHpackTableSize();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getMaxConcurrentStreams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getInitialStreamWindowSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getInitialConnectionWindowSize();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getAllowConnect();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAllowMetadata();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.UInt32Value hpack_table_size = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getHpackTableSize = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setHpackTableSize = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.clearHpackTableSize = function() {
  this.setHpackTableSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.hasHpackTableSize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.UInt32Value max_concurrent_streams = 2;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getMaxConcurrentStreams = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 2));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setMaxConcurrentStreams = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.clearMaxConcurrentStreams = function() {
  this.setMaxConcurrentStreams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.hasMaxConcurrentStreams = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value initial_stream_window_size = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getInitialStreamWindowSize = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setInitialStreamWindowSize = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.clearInitialStreamWindowSize = function() {
  this.setInitialStreamWindowSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.hasInitialStreamWindowSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.UInt32Value initial_connection_window_size = 4;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getInitialConnectionWindowSize = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 4));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setInitialConnectionWindowSize = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.clearInitialConnectionWindowSize = function() {
  this.setInitialConnectionWindowSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.hasInitialConnectionWindowSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool allow_connect = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getAllowConnect = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setAllowConnect = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool allow_metadata = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.getAllowMetadata = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.envoy.api.v2.core.Http2ProtocolOptions.prototype.setAllowMetadata = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.GrpcProtocolOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.GrpcProtocolOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    http2ProtocolOptions: (f = msg.getHttp2ProtocolOptions()) && proto.envoy.api.v2.core.Http2ProtocolOptions.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.GrpcProtocolOptions}
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.GrpcProtocolOptions;
  return proto.envoy.api.v2.core.GrpcProtocolOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.GrpcProtocolOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.GrpcProtocolOptions}
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.api.v2.core.Http2ProtocolOptions;
      reader.readMessage(value,proto.envoy.api.v2.core.Http2ProtocolOptions.deserializeBinaryFromReader);
      msg.setHttp2ProtocolOptions(value);
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
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.GrpcProtocolOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.GrpcProtocolOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttp2ProtocolOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.envoy.api.v2.core.Http2ProtocolOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional Http2ProtocolOptions http2_protocol_options = 1;
 * @return {?proto.envoy.api.v2.core.Http2ProtocolOptions}
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.getHttp2ProtocolOptions = function() {
  return /** @type{?proto.envoy.api.v2.core.Http2ProtocolOptions} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.core.Http2ProtocolOptions, 1));
};


/** @param {?proto.envoy.api.v2.core.Http2ProtocolOptions|undefined} value */
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.setHttp2ProtocolOptions = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.clearHttp2ProtocolOptions = function() {
  this.setHttp2ProtocolOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.GrpcProtocolOptions.prototype.hasHttp2ProtocolOptions = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.core);