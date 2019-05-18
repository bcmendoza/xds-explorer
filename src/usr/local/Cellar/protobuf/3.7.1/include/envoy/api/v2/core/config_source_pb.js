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

var envoy_api_v2_core_grpc_service_pb = require('./envoy/api/v2/core/grpc_service_pb.js');
goog.object.extend(proto, envoy_api_v2_core_grpc_service_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.api.v2.core.AggregatedConfigSource', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.ApiConfigSource', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.ApiConfigSource.ApiType', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.ConfigSource', null, global);
goog.exportSymbol('proto.envoy.api.v2.core.RateLimitSettings', null, global);
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
proto.envoy.api.v2.core.ApiConfigSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.api.v2.core.ApiConfigSource.repeatedFields_, null);
};
goog.inherits(proto.envoy.api.v2.core.ApiConfigSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.ApiConfigSource.displayName = 'proto.envoy.api.v2.core.ApiConfigSource';
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
proto.envoy.api.v2.core.AggregatedConfigSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.AggregatedConfigSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.AggregatedConfigSource.displayName = 'proto.envoy.api.v2.core.AggregatedConfigSource';
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
proto.envoy.api.v2.core.RateLimitSettings = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.api.v2.core.RateLimitSettings, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.RateLimitSettings.displayName = 'proto.envoy.api.v2.core.RateLimitSettings';
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
proto.envoy.api.v2.core.ConfigSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.core.ConfigSource.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.core.ConfigSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.api.v2.core.ConfigSource.displayName = 'proto.envoy.api.v2.core.ConfigSource';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.api.v2.core.ApiConfigSource.repeatedFields_ = [2,4];



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
proto.envoy.api.v2.core.ApiConfigSource.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.ApiConfigSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.ApiConfigSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.ApiConfigSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    clusterNamesList: jspb.Message.getRepeatedField(msg, 2),
    grpcServicesList: jspb.Message.toObjectList(msg.getGrpcServicesList(),
    envoy_api_v2_core_grpc_service_pb.GrpcService.toObject, includeInstance),
    refreshDelay: (f = msg.getRefreshDelay()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    requestTimeout: (f = msg.getRequestTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    rateLimitSettings: (f = msg.getRateLimitSettings()) && proto.envoy.api.v2.core.RateLimitSettings.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.ApiConfigSource}
 */
proto.envoy.api.v2.core.ApiConfigSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.ApiConfigSource;
  return proto.envoy.api.v2.core.ApiConfigSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.ApiConfigSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.ApiConfigSource}
 */
proto.envoy.api.v2.core.ApiConfigSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.api.v2.core.ApiConfigSource.ApiType} */ (reader.readEnum());
      msg.setApiType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addClusterNames(value);
      break;
    case 4:
      var value = new envoy_api_v2_core_grpc_service_pb.GrpcService;
      reader.readMessage(value,envoy_api_v2_core_grpc_service_pb.GrpcService.deserializeBinaryFromReader);
      msg.addGrpcServices(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRefreshDelay(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setRequestTimeout(value);
      break;
    case 6:
      var value = new proto.envoy.api.v2.core.RateLimitSettings;
      reader.readMessage(value,proto.envoy.api.v2.core.RateLimitSettings.deserializeBinaryFromReader);
      msg.setRateLimitSettings(value);
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
proto.envoy.api.v2.core.ApiConfigSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.ApiConfigSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.ApiConfigSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.ApiConfigSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getClusterNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getGrpcServicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      envoy_api_v2_core_grpc_service_pb.GrpcService.serializeBinaryToWriter
    );
  }
  f = message.getRefreshDelay();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRequestTimeout();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getRateLimitSettings();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.envoy.api.v2.core.RateLimitSettings.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.api.v2.core.ApiConfigSource.ApiType = {
  UNSUPPORTED_REST_LEGACY: 0,
  REST: 1,
  GRPC: 2,
  DELTA_GRPC: 3
};

/**
 * optional ApiType api_type = 1;
 * @return {!proto.envoy.api.v2.core.ApiConfigSource.ApiType}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getApiType = function() {
  return /** @type {!proto.envoy.api.v2.core.ApiConfigSource.ApiType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.envoy.api.v2.core.ApiConfigSource.ApiType} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setApiType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string cluster_names = 2;
 * @return {!Array<string>}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getClusterNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setClusterNamesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.addClusterNames = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.clearClusterNamesList = function() {
  this.setClusterNamesList([]);
};


/**
 * repeated GrpcService grpc_services = 4;
 * @return {!Array<!proto.envoy.api.v2.core.GrpcService>}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getGrpcServicesList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.core.GrpcService>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_core_grpc_service_pb.GrpcService, 4));
};


/** @param {!Array<!proto.envoy.api.v2.core.GrpcService>} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setGrpcServicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.envoy.api.v2.core.GrpcService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.core.GrpcService}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.addGrpcServices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.envoy.api.v2.core.GrpcService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.clearGrpcServicesList = function() {
  this.setGrpcServicesList([]);
};


/**
 * optional google.protobuf.Duration refresh_delay = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getRefreshDelay = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setRefreshDelay = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.clearRefreshDelay = function() {
  this.setRefreshDelay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.hasRefreshDelay = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration request_timeout = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getRequestTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setRequestTimeout = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.clearRequestTimeout = function() {
  this.setRequestTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.hasRequestTimeout = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RateLimitSettings rate_limit_settings = 6;
 * @return {?proto.envoy.api.v2.core.RateLimitSettings}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.getRateLimitSettings = function() {
  return /** @type{?proto.envoy.api.v2.core.RateLimitSettings} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.core.RateLimitSettings, 6));
};


/** @param {?proto.envoy.api.v2.core.RateLimitSettings|undefined} value */
proto.envoy.api.v2.core.ApiConfigSource.prototype.setRateLimitSettings = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.clearRateLimitSettings = function() {
  this.setRateLimitSettings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ApiConfigSource.prototype.hasRateLimitSettings = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.envoy.api.v2.core.AggregatedConfigSource.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.AggregatedConfigSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.AggregatedConfigSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.AggregatedConfigSource.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.api.v2.core.AggregatedConfigSource}
 */
proto.envoy.api.v2.core.AggregatedConfigSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.AggregatedConfigSource;
  return proto.envoy.api.v2.core.AggregatedConfigSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.AggregatedConfigSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.AggregatedConfigSource}
 */
proto.envoy.api.v2.core.AggregatedConfigSource.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.api.v2.core.AggregatedConfigSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.AggregatedConfigSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.AggregatedConfigSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.AggregatedConfigSource.serializeBinaryToWriter = function(message, writer) {
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
proto.envoy.api.v2.core.RateLimitSettings.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.RateLimitSettings.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.RateLimitSettings} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.RateLimitSettings.toObject = function(includeInstance, msg) {
  var f, obj = {
    maxTokens: (f = msg.getMaxTokens()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    fillRate: (f = msg.getFillRate()) && google_protobuf_wrappers_pb.DoubleValue.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.RateLimitSettings}
 */
proto.envoy.api.v2.core.RateLimitSettings.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.RateLimitSettings;
  return proto.envoy.api.v2.core.RateLimitSettings.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.RateLimitSettings} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.RateLimitSettings}
 */
proto.envoy.api.v2.core.RateLimitSettings.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setMaxTokens(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.DoubleValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.DoubleValue.deserializeBinaryFromReader);
      msg.setFillRate(value);
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
proto.envoy.api.v2.core.RateLimitSettings.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.RateLimitSettings.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.RateLimitSettings} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.RateLimitSettings.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaxTokens();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getFillRate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.DoubleValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value max_tokens = 1;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.getMaxTokens = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 1));
};


/** @param {?proto.google.protobuf.UInt32Value|undefined} value */
proto.envoy.api.v2.core.RateLimitSettings.prototype.setMaxTokens = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.clearMaxTokens = function() {
  this.setMaxTokens(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.hasMaxTokens = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.DoubleValue fill_rate = 2;
 * @return {?proto.google.protobuf.DoubleValue}
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.getFillRate = function() {
  return /** @type{?proto.google.protobuf.DoubleValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.DoubleValue, 2));
};


/** @param {?proto.google.protobuf.DoubleValue|undefined} value */
proto.envoy.api.v2.core.RateLimitSettings.prototype.setFillRate = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.clearFillRate = function() {
  this.setFillRate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.RateLimitSettings.prototype.hasFillRate = function() {
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
proto.envoy.api.v2.core.ConfigSource.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.core.ConfigSource.ConfigSourceSpecifierCase = {
  CONFIG_SOURCE_SPECIFIER_NOT_SET: 0,
  PATH: 1,
  API_CONFIG_SOURCE: 2,
  ADS: 3
};

/**
 * @return {proto.envoy.api.v2.core.ConfigSource.ConfigSourceSpecifierCase}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.getConfigSourceSpecifierCase = function() {
  return /** @type {proto.envoy.api.v2.core.ConfigSource.ConfigSourceSpecifierCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.core.ConfigSource.oneofGroups_[0]));
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
proto.envoy.api.v2.core.ConfigSource.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.ConfigSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.ConfigSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.ConfigSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apiConfigSource: (f = msg.getApiConfigSource()) && proto.envoy.api.v2.core.ApiConfigSource.toObject(includeInstance, f),
    ads: (f = msg.getAds()) && proto.envoy.api.v2.core.AggregatedConfigSource.toObject(includeInstance, f),
    initialFetchTimeout: (f = msg.getInitialFetchTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.api.v2.core.ConfigSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.ConfigSource;
  return proto.envoy.api.v2.core.ConfigSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.ConfigSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.ConfigSource}
 */
proto.envoy.api.v2.core.ConfigSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = new proto.envoy.api.v2.core.ApiConfigSource;
      reader.readMessage(value,proto.envoy.api.v2.core.ApiConfigSource.deserializeBinaryFromReader);
      msg.setApiConfigSource(value);
      break;
    case 3:
      var value = new proto.envoy.api.v2.core.AggregatedConfigSource;
      reader.readMessage(value,proto.envoy.api.v2.core.AggregatedConfigSource.deserializeBinaryFromReader);
      msg.setAds(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInitialFetchTimeout(value);
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
proto.envoy.api.v2.core.ConfigSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.ConfigSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.ConfigSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.ConfigSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApiConfigSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.api.v2.core.ApiConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getAds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.api.v2.core.AggregatedConfigSource.serializeBinaryToWriter
    );
  }
  f = message.getInitialFetchTimeout();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.api.v2.core.ConfigSource.prototype.setPath = function(value) {
  jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.core.ConfigSource.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 */
proto.envoy.api.v2.core.ConfigSource.prototype.clearPath = function() {
  jspb.Message.setOneofField(this, 1, proto.envoy.api.v2.core.ConfigSource.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.hasPath = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ApiConfigSource api_config_source = 2;
 * @return {?proto.envoy.api.v2.core.ApiConfigSource}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.getApiConfigSource = function() {
  return /** @type{?proto.envoy.api.v2.core.ApiConfigSource} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.core.ApiConfigSource, 2));
};


/** @param {?proto.envoy.api.v2.core.ApiConfigSource|undefined} value */
proto.envoy.api.v2.core.ConfigSource.prototype.setApiConfigSource = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.envoy.api.v2.core.ConfigSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ConfigSource.prototype.clearApiConfigSource = function() {
  this.setApiConfigSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.hasApiConfigSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AggregatedConfigSource ads = 3;
 * @return {?proto.envoy.api.v2.core.AggregatedConfigSource}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.getAds = function() {
  return /** @type{?proto.envoy.api.v2.core.AggregatedConfigSource} */ (
    jspb.Message.getWrapperField(this, proto.envoy.api.v2.core.AggregatedConfigSource, 3));
};


/** @param {?proto.envoy.api.v2.core.AggregatedConfigSource|undefined} value */
proto.envoy.api.v2.core.ConfigSource.prototype.setAds = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.envoy.api.v2.core.ConfigSource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ConfigSource.prototype.clearAds = function() {
  this.setAds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.hasAds = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration initial_fetch_timeout = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.getInitialFetchTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.core.ConfigSource.prototype.setInitialFetchTimeout = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.api.v2.core.ConfigSource.prototype.clearInitialFetchTimeout = function() {
  this.setInitialFetchTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.ConfigSource.prototype.hasInitialFetchTimeout = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.core);
