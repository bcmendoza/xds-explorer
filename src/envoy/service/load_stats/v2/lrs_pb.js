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
var envoy_api_v2_endpoint_load_report_pb = require('./envoy/api/v2/endpoint/load_report_pb.js');
goog.object.extend(proto, envoy_api_v2_endpoint_load_report_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.service.load_stats.v2.LoadStatsRequest', null, global);
goog.exportSymbol('proto.envoy.service.load_stats.v2.LoadStatsResponse', null, global);
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
proto.envoy.service.load_stats.v2.LoadStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.service.load_stats.v2.LoadStatsRequest.repeatedFields_, null);
};
goog.inherits(proto.envoy.service.load_stats.v2.LoadStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.service.load_stats.v2.LoadStatsRequest.displayName = 'proto.envoy.service.load_stats.v2.LoadStatsRequest';
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
proto.envoy.service.load_stats.v2.LoadStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.service.load_stats.v2.LoadStatsResponse.repeatedFields_, null);
};
goog.inherits(proto.envoy.service.load_stats.v2.LoadStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.service.load_stats.v2.LoadStatsResponse.displayName = 'proto.envoy.service.load_stats.v2.LoadStatsResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.repeatedFields_ = [2];



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
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.load_stats.v2.LoadStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    node: (f = msg.getNode()) && envoy_api_v2_core_base_pb.Node.toObject(includeInstance, f),
    clusterStatsList: jspb.Message.toObjectList(msg.getClusterStatsList(),
    envoy_api_v2_endpoint_load_report_pb.ClusterStats.toObject, includeInstance)
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
 * @return {!proto.envoy.service.load_stats.v2.LoadStatsRequest}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.load_stats.v2.LoadStatsRequest;
  return proto.envoy.service.load_stats.v2.LoadStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.load_stats.v2.LoadStatsRequest}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new envoy_api_v2_core_base_pb.Node;
      reader.readMessage(value,envoy_api_v2_core_base_pb.Node.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    case 2:
      var value = new envoy_api_v2_endpoint_load_report_pb.ClusterStats;
      reader.readMessage(value,envoy_api_v2_endpoint_load_report_pb.ClusterStats.deserializeBinaryFromReader);
      msg.addClusterStats(value);
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
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.load_stats.v2.LoadStatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      envoy_api_v2_core_base_pb.Node.serializeBinaryToWriter
    );
  }
  f = message.getClusterStatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      envoy_api_v2_endpoint_load_report_pb.ClusterStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional envoy.api.v2.core.Node node = 1;
 * @return {?proto.envoy.api.v2.core.Node}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.getNode = function() {
  return /** @type{?proto.envoy.api.v2.core.Node} */ (
    jspb.Message.getWrapperField(this, envoy_api_v2_core_base_pb.Node, 1));
};


/** @param {?proto.envoy.api.v2.core.Node|undefined} value */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.setNode = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.clearNode = function() {
  this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.hasNode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated envoy.api.v2.endpoint.ClusterStats cluster_stats = 2;
 * @return {!Array<!proto.envoy.api.v2.endpoint.ClusterStats>}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.getClusterStatsList = function() {
  return /** @type{!Array<!proto.envoy.api.v2.endpoint.ClusterStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, envoy_api_v2_endpoint_load_report_pb.ClusterStats, 2));
};


/** @param {!Array<!proto.envoy.api.v2.endpoint.ClusterStats>} value */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.setClusterStatsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.api.v2.endpoint.ClusterStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.api.v2.endpoint.ClusterStats}
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.addClusterStats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.api.v2.endpoint.ClusterStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.service.load_stats.v2.LoadStatsRequest.prototype.clearClusterStatsList = function() {
  this.setClusterStatsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.repeatedFields_ = [1];



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
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.service.load_stats.v2.LoadStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    clustersList: jspb.Message.getRepeatedField(msg, 1),
    loadReportingInterval: (f = msg.getLoadReportingInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    reportEndpointGranularity: jspb.Message.getFieldWithDefault(msg, 3, false)
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
 * @return {!proto.envoy.service.load_stats.v2.LoadStatsResponse}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.service.load_stats.v2.LoadStatsResponse;
  return proto.envoy.service.load_stats.v2.LoadStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.service.load_stats.v2.LoadStatsResponse}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addClusters(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setLoadReportingInterval(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReportEndpointGranularity(value);
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
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.service.load_stats.v2.LoadStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.service.load_stats.v2.LoadStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getLoadReportingInterval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getReportEndpointGranularity();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated string clusters = 1;
 * @return {!Array<string>}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.getClustersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.setClustersList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.addClusters = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.clearClustersList = function() {
  this.setClustersList([]);
};


/**
 * optional google.protobuf.Duration load_reporting_interval = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.getLoadReportingInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.setLoadReportingInterval = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.clearLoadReportingInterval = function() {
  this.setLoadReportingInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.hasLoadReportingInterval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool report_endpoint_granularity = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.getReportEndpointGranularity = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.envoy.service.load_stats.v2.LoadStatsResponse.prototype.setReportEndpointGranularity = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.envoy.service.load_stats.v2);
