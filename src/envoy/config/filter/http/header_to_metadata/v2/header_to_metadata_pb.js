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
goog.exportSymbol('proto.envoy.config.filter.http.header_to_metadata.v2.Config', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule', null, global);
goog.exportSymbol('proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType', null, global);
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.envoy.config.filter.http.header_to_metadata.v2.Config.repeatedFields_, null);
};
goog.inherits(proto.envoy.config.filter.http.header_to_metadata.v2.Config, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.displayName = 'proto.envoy.config.filter.http.header_to_metadata.v2.Config';
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.displayName = 'proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair';
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.displayName = 'proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.repeatedFields_ = [1,2];



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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestRulesList: jspb.Message.toObjectList(msg.getRequestRulesList(),
    proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.toObject, includeInstance),
    responseRulesList: jspb.Message.toObjectList(msg.getResponseRulesList(),
    proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.toObject, includeInstance)
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
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.header_to_metadata.v2.Config;
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule;
      reader.readMessage(value,proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.deserializeBinaryFromReader);
      msg.addRequestRules(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule;
      reader.readMessage(value,proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.deserializeBinaryFromReader);
      msg.addResponseRules(value);
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.serializeBinaryToWriter
    );
  }
  f = message.getResponseRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType = {
  STRING: 0,
  NUMBER: 1
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadataNamespace: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair;
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetadataNamespace(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType} */ (reader.readEnum());
      msg.setType(value);
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadataNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string metadata_namespace = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.getMetadataNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.setMetadataNamespace = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ValueType type = 4;
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.getType = function() {
  return /** @type {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.ValueType} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: jspb.Message.getFieldWithDefault(msg, 1, ""),
    onHeaderPresent: (f = msg.getOnHeaderPresent()) && proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.toObject(includeInstance, f),
    onHeaderMissing: (f = msg.getOnHeaderMissing()) && proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.toObject(includeInstance, f),
    remove: jspb.Message.getFieldWithDefault(msg, 4, false)
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
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule;
  return proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair;
      reader.readMessage(value,proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.deserializeBinaryFromReader);
      msg.setOnHeaderPresent(value);
      break;
    case 3:
      var value = new proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair;
      reader.readMessage(value,proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.deserializeBinaryFromReader);
      msg.setOnHeaderMissing(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRemove(value);
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
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOnHeaderPresent();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.serializeBinaryToWriter
    );
  }
  f = message.getOnHeaderMissing();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair.serializeBinaryToWriter
    );
  }
  f = message.getRemove();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string header = 1;
 * @return {string}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.getHeader = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.setHeader = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional KeyValuePair on_header_present = 2;
 * @return {?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.getOnHeaderPresent = function() {
  return /** @type{?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair, 2));
};


/** @param {?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair|undefined} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.setOnHeaderPresent = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.clearOnHeaderPresent = function() {
  this.setOnHeaderPresent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.hasOnHeaderPresent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional KeyValuePair on_header_missing = 3;
 * @return {?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.getOnHeaderMissing = function() {
  return /** @type{?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair} */ (
    jspb.Message.getWrapperField(this, proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair, 3));
};


/** @param {?proto.envoy.config.filter.http.header_to_metadata.v2.Config.KeyValuePair|undefined} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.setOnHeaderMissing = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.clearOnHeaderMissing = function() {
  this.setOnHeaderMissing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.hasOnHeaderMissing = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool remove = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.getRemove = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule.prototype.setRemove = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * repeated Rule request_rules = 1;
 * @return {!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.getRequestRulesList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule, 1));
};


/** @param {!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.setRequestRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.addRequestRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.clearRequestRulesList = function() {
  this.setRequestRulesList([]);
};


/**
 * repeated Rule response_rules = 2;
 * @return {!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.getResponseRulesList = function() {
  return /** @type{!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule, 2));
};


/** @param {!Array<!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule>} value */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.setResponseRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule}
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.addResponseRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.envoy.config.filter.http.header_to_metadata.v2.Config.Rule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.envoy.config.filter.http.header_to_metadata.v2.Config.prototype.clearResponseRulesList = function() {
  this.setResponseRulesList([]);
};


goog.object.extend(exports, proto.envoy.config.filter.http.header_to_metadata.v2);
