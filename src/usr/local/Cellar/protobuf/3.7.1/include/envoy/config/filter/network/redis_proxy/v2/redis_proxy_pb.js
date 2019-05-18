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
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes', null, global);
goog.exportSymbol('proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route', null, global);
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.displayName = 'proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy';
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.displayName = 'proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings';
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.displayName = 'proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes';
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.displayName = 'proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route';
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.toObject = function(includeInstance, msg) {
  var f, obj = {
    statPrefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cluster: jspb.Message.getFieldWithDefault(msg, 2, ""),
    settings: (f = msg.getSettings()) && proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.toObject(includeInstance, f),
    latencyInMicros: jspb.Message.getFieldWithDefault(msg, 4, false),
    prefixRoutes: (f = msg.getPrefixRoutes()) && proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy;
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCluster(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings;
      reader.readMessage(value,proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.deserializeBinaryFromReader);
      msg.setSettings(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLatencyInMicros(value);
      break;
    case 5:
      var value = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes;
      reader.readMessage(value,proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.deserializeBinaryFromReader);
      msg.setPrefixRoutes(value);
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSettings();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.serializeBinaryToWriter
    );
  }
  f = message.getLatencyInMicros();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPrefixRoutes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.serializeBinaryToWriter
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    opTimeout: (f = msg.getOpTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    enableHashtagging: jspb.Message.getFieldWithDefault(msg, 2, false),
    enableRedirection: jspb.Message.getFieldWithDefault(msg, 3, false),
    maxBufferSizeBeforeFlush: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bufferFlushTimeout: (f = msg.getBufferFlushTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings;
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setOpTimeout(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableHashtagging(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableRedirection(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxBufferSizeBeforeFlush(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setBufferFlushTimeout(value);
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOpTimeout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getEnableHashtagging();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getEnableRedirection();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getMaxBufferSizeBeforeFlush();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getBufferFlushTimeout();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Duration op_timeout = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.getOpTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.setOpTimeout = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.clearOpTimeout = function() {
  this.setOpTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.hasOpTimeout = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool enable_hashtagging = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.getEnableHashtagging = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.setEnableHashtagging = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool enable_redirection = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.getEnableRedirection = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.setEnableRedirection = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 max_buffer_size_before_flush = 4;
 * @return {number}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.getMaxBufferSizeBeforeFlush = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.setMaxBufferSizeBeforeFlush = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Duration buffer_flush_timeout = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.getBufferFlushTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.setBufferFlushTimeout = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.clearBufferFlushTimeout = function() {
  this.setBufferFlushTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings.prototype.hasBufferFlushTimeout = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.repeatedFields_ = [1];



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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.toObject = function(includeInstance, msg) {
  var f, obj = {
    routesList: jspb.Message.toObjectList(msg.getRoutesList(),
    proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.toObject, includeInstance),
    caseInsensitive: jspb.Message.getFieldWithDefault(msg, 2, false),
    catchAllCluster: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes;
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route;
      reader.readMessage(value,proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.deserializeBinaryFromReader);
      msg.addRoutes(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCaseInsensitive(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatchAllCluster(value);
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.serializeBinaryToWriter
    );
  }
  f = message.getCaseInsensitive();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCatchAllCluster();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    removePrefix: jspb.Message.getFieldWithDefault(msg, 2, false),
    cluster: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route;
  return proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemovePrefix(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
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
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRemovePrefix();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCluster();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.setPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool remove_prefix = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.getRemovePrefix = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.setRemovePrefix = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string cluster = 3;
 * @return {string}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route.prototype.setCluster = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Route routes = 1;
 * @return {!Array<!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route>}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.getRoutesList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route, 1));
};


/** @param {!Array<!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route>} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.setRoutesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.addRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.Route, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.clearRoutesList = function() {
  this.setRoutesList([]);
};


/**
 * optional bool case_insensitive = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.getCaseInsensitive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.setCaseInsensitive = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string catch_all_cluster = 3;
 * @return {string}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.getCatchAllCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes.prototype.setCatchAllCluster = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string stat_prefix = 1;
 * @return {string}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.getStatPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.setStatPrefix = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster = 2;
 * @return {string}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.setCluster = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConnPoolSettings settings = 3;
 * @return {?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.getSettings = function() {
  return /** @type{?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings, 3));
};


/** @param {?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.ConnPoolSettings|undefined} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.setSettings = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.clearSettings = function() {
  this.setSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.hasSettings = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool latency_in_micros = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.getLatencyInMicros = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.setLatencyInMicros = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional PrefixRoutes prefix_routes = 5;
 * @return {?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.getPrefixRoutes = function() {
  return /** @type{?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes, 5));
};


/** @param {?proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.PrefixRoutes|undefined} value */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.setPrefixRoutes = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.clearPrefixRoutes = function() {
  this.setPrefixRoutes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.network.redis_proxy.v2.RedisProxy.prototype.hasPrefixRoutes = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.envoy.config.filter.network.redis_proxy.v2);