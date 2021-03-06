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

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var validate_validate_pb = require('./validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.envoy.data.cluster.v2alpha.Action', null, global);
goog.exportSymbol('proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent', null, global);
goog.exportSymbol('proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive', null, global);
goog.exportSymbol('proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate', null, global);
goog.exportSymbol('proto.envoy.data.cluster.v2alpha.OutlierEjectionType', null, global);
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
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.oneofGroups_);
};
goog.inherits(proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.displayName = 'proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent';
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
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.displayName = 'proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate';
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
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.displayName = 'proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.oneofGroups_ = [[9,10]];

/**
 * @enum {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.EventCase = {
  EVENT_NOT_SET: 0,
  EJECT_SUCCESS_RATE_EVENT: 9,
  EJECT_CONSECUTIVE_EVENT: 10
};

/**
 * @return {proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.EventCase}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getEventCase = function() {
  return /** @type {proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.EventCase} */(jspb.Message.computeOneofCase(this, proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.oneofGroups_[0]));
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
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    secsSinceLastAction: (f = msg.getSecsSinceLastAction()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f),
    clusterName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    upstreamUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    action: jspb.Message.getFieldWithDefault(msg, 6, 0),
    numEjections: jspb.Message.getFieldWithDefault(msg, 7, 0),
    enforced: jspb.Message.getFieldWithDefault(msg, 8, false),
    ejectSuccessRateEvent: (f = msg.getEjectSuccessRateEvent()) && proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.toObject(includeInstance, f),
    ejectConsecutiveEvent: (f = msg.getEjectConsecutiveEvent()) && proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.toObject(includeInstance, f)
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
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent;
  return proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.envoy.data.cluster.v2alpha.OutlierEjectionType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setSecsSinceLastAction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClusterName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpstreamUrl(value);
      break;
    case 6:
      var value = /** @type {!proto.envoy.data.cluster.v2alpha.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumEjections(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnforced(value);
      break;
    case 9:
      var value = new proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate;
      reader.readMessage(value,proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.deserializeBinaryFromReader);
      msg.setEjectSuccessRateEvent(value);
      break;
    case 10:
      var value = new proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive;
      reader.readMessage(value,proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.deserializeBinaryFromReader);
      msg.setEjectConsecutiveEvent(value);
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
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSecsSinceLastAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
  f = message.getClusterName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUpstreamUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getNumEjections();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getEnforced();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getEjectSuccessRateEvent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.serializeBinaryToWriter
    );
  }
  f = message.getEjectConsecutiveEvent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutlierEjectionType type = 1;
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierEjectionType}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getType = function() {
  return /** @type {!proto.envoy.data.cluster.v2alpha.OutlierEjectionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectionType} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt64Value secs_since_last_action = 3;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getSecsSinceLastAction = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 3));
};


/** @param {?proto.google.protobuf.UInt64Value|undefined} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setSecsSinceLastAction = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.clearSecsSinceLastAction = function() {
  this.setSecsSinceLastAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.hasSecsSinceLastAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string cluster_name = 4;
 * @return {string}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getClusterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setClusterName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string upstream_url = 5;
 * @return {string}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getUpstreamUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setUpstreamUrl = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Action action = 6;
 * @return {!proto.envoy.data.cluster.v2alpha.Action}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getAction = function() {
  return /** @type {!proto.envoy.data.cluster.v2alpha.Action} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.envoy.data.cluster.v2alpha.Action} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setAction = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional uint32 num_ejections = 7;
 * @return {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getNumEjections = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setNumEjections = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional bool enforced = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getEnforced = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setEnforced = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional OutlierEjectSuccessRate eject_success_rate_event = 9;
 * @return {?proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getEjectSuccessRateEvent = function() {
  return /** @type{?proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate} */ (
    jspb.Message.getWrapperField(this, proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate, 9));
};


/** @param {?proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate|undefined} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setEjectSuccessRateEvent = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.clearEjectSuccessRateEvent = function() {
  this.setEjectSuccessRateEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.hasEjectSuccessRateEvent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional OutlierEjectConsecutive eject_consecutive_event = 10;
 * @return {?proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.getEjectConsecutiveEvent = function() {
  return /** @type{?proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive} */ (
    jspb.Message.getWrapperField(this, proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive, 10));
};


/** @param {?proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive|undefined} value */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.setEjectConsecutiveEvent = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.clearEjectConsecutiveEvent = function() {
  this.setEjectConsecutiveEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.data.cluster.v2alpha.OutlierDetectionEvent.prototype.hasEjectConsecutiveEvent = function() {
  return jspb.Message.getField(this, 10) != null;
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
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    hostSuccessRate: jspb.Message.getFieldWithDefault(msg, 1, 0),
    clusterAverageSuccessRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clusterSuccessRateEjectionThreshold: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate;
  return proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHostSuccessRate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClusterAverageSuccessRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClusterSuccessRateEjectionThreshold(value);
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
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHostSuccessRate();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getClusterAverageSuccessRate();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getClusterSuccessRateEjectionThreshold();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 host_success_rate = 1;
 * @return {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.getHostSuccessRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.setHostSuccessRate = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 cluster_average_success_rate = 2;
 * @return {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.getClusterAverageSuccessRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.setClusterAverageSuccessRate = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 cluster_success_rate_ejection_threshold = 3;
 * @return {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.getClusterSuccessRateEjectionThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.envoy.data.cluster.v2alpha.OutlierEjectSuccessRate.prototype.setClusterSuccessRateEjectionThreshold = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
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
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.toObject = function(includeInstance, msg) {
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
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive;
  return proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.deserializeBinaryFromReader = function(msg, reader) {
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
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectConsecutive.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * @enum {number}
 */
proto.envoy.data.cluster.v2alpha.OutlierEjectionType = {
  CONSECUTIVE_5XX: 0,
  CONSECUTIVE_GATEWAY_FAILURE: 1,
  SUCCESS_RATE: 2
};

/**
 * @enum {number}
 */
proto.envoy.data.cluster.v2alpha.Action = {
  EJECT: 0,
  UNEJECT: 1
};

goog.object.extend(exports, proto.envoy.data.cluster.v2alpha);
