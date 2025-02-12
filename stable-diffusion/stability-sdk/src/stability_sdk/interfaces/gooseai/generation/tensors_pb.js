// source: tensors.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return Function("return this")();
}.call(null);

goog.exportSymbol("proto.tensors.Attribute", null, global);
goog.exportSymbol("proto.tensors.Attribute.ValueCase", null, global);
goog.exportSymbol("proto.tensors.AttributeType", null, global);
goog.exportSymbol("proto.tensors.Dtype", null, global);
goog.exportSymbol("proto.tensors.Module", null, global);
goog.exportSymbol("proto.tensors.Tensor", null, global);
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
proto.tensors.Tensor = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.tensors.Tensor.repeatedFields_,
    null
  );
};
goog.inherits(proto.tensors.Tensor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensors.Tensor.displayName = "proto.tensors.Tensor";
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
proto.tensors.Attribute = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.tensors.Attribute.oneofGroups_
  );
};
goog.inherits(proto.tensors.Attribute, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensors.Attribute.displayName = "proto.tensors.Attribute";
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
proto.tensors.Module = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.tensors.Module.repeatedFields_,
    null
  );
};
goog.inherits(proto.tensors.Module, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensors.Module.displayName = "proto.tensors.Module";
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensors.Tensor.repeatedFields_ = [2];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tensors.Tensor.prototype.toObject = function (opt_includeInstance) {
    return proto.tensors.Tensor.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tensors.Tensor} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tensors.Tensor.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
        shapeList:
          (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        data: msg.getData_asB64(),
        attrType: jspb.Message.getFieldWithDefault(msg, 4, 0),
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
 * @return {!proto.tensors.Tensor}
 */
proto.tensors.Tensor.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensors.Tensor();
  return proto.tensors.Tensor.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensors.Tensor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensors.Tensor}
 */
proto.tensors.Tensor.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {!proto.tensors.Dtype} */ (reader.readEnum());
        msg.setDtype(value);
        break;
      case 2:
        var values = /** @type {!Array<number>} */ (
          reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]
        );
        for (var i = 0; i < values.length; i++) {
          msg.addShape(values[i]);
        }
        break;
      case 3:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setData(value);
        break;
      case 4:
        var value = /** @type {!proto.tensors.AttributeType} */ (
          reader.readEnum()
        );
        msg.setAttrType(value);
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
proto.tensors.Tensor.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tensors.Tensor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensors.Tensor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensors.Tensor.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(1, f);
  }
  f = message.getShapeList();
  if (f.length > 0) {
    writer.writePackedInt64(2, f);
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(3, f);
  }
  f = /** @type {!proto.tensors.AttributeType} */ (
    jspb.Message.getField(message, 4)
  );
  if (f != null) {
    writer.writeEnum(4, f);
  }
};

/**
 * optional Dtype dtype = 1;
 * @return {!proto.tensors.Dtype}
 */
proto.tensors.Tensor.prototype.getDtype = function () {
  return /** @type {!proto.tensors.Dtype} */ (
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};

/**
 * @param {!proto.tensors.Dtype} value
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.setDtype = function (value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};

/**
 * repeated int64 shape = 2;
 * @return {!Array<number>}
 */
proto.tensors.Tensor.prototype.getShapeList = function () {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<number>} value
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.setShapeList = function (value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.addShape = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.clearShapeList = function () {
  return this.setShapeList([]);
};

/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.tensors.Tensor.prototype.getData = function () {
  return /** @type {!(string|Uint8Array)} */ (
    jspb.Message.getFieldWithDefault(this, 3, "")
  );
};

/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.tensors.Tensor.prototype.getData_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getData()));
};

/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.tensors.Tensor.prototype.getData_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getData()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.setData = function (value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};

/**
 * optional AttributeType attr_type = 4;
 * @return {!proto.tensors.AttributeType}
 */
proto.tensors.Tensor.prototype.getAttrType = function () {
  return /** @type {!proto.tensors.AttributeType} */ (
    jspb.Message.getFieldWithDefault(this, 4, 0)
  );
};

/**
 * @param {!proto.tensors.AttributeType} value
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.setAttrType = function (value) {
  return jspb.Message.setField(this, 4, value);
};

/**
 * Clears the field making it undefined.
 * @return {!proto.tensors.Tensor} returns this
 */
proto.tensors.Tensor.prototype.clearAttrType = function () {
  return jspb.Message.setField(this, 4, undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Tensor.prototype.hasAttrType = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.tensors.Attribute.oneofGroups_ = [[3, 4, 5, 6, 7, 8]];

/**
 * @enum {number}
 */
proto.tensors.Attribute.ValueCase = {
  VALUE_NOT_SET: 0,
  MODULE: 3,
  TENSOR: 4,
  STRING: 5,
  INT64: 6,
  FLOAT: 7,
  BOOL: 8,
};

/**
 * @return {proto.tensors.Attribute.ValueCase}
 */
proto.tensors.Attribute.prototype.getValueCase = function () {
  return /** @type {proto.tensors.Attribute.ValueCase} */ (
    jspb.Message.computeOneofCase(this, proto.tensors.Attribute.oneofGroups_[0])
  );
};

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tensors.Attribute.prototype.toObject = function (opt_includeInstance) {
    return proto.tensors.Attribute.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tensors.Attribute} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tensors.Attribute.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ""),
        module:
          (f = msg.getModule()) &&
          proto.tensors.Module.toObject(includeInstance, f),
        tensor:
          (f = msg.getTensor()) &&
          proto.tensors.Tensor.toObject(includeInstance, f),
        string: jspb.Message.getFieldWithDefault(msg, 5, ""),
        int64: jspb.Message.getFieldWithDefault(msg, 6, 0),
        pb_float: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
        bool: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
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
 * @return {!proto.tensors.Attribute}
 */
proto.tensors.Attribute.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensors.Attribute();
  return proto.tensors.Attribute.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensors.Attribute} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensors.Attribute}
 */
proto.tensors.Attribute.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = new proto.tensors.Module();
        reader.readMessage(
          value,
          proto.tensors.Module.deserializeBinaryFromReader
        );
        msg.setModule(value);
        break;
      case 4:
        var value = new proto.tensors.Tensor();
        reader.readMessage(
          value,
          proto.tensors.Tensor.deserializeBinaryFromReader
        );
        msg.setTensor(value);
        break;
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setString(value);
        break;
      case 6:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setInt64(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readFloat());
        msg.setFloat(value);
        break;
      case 8:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setBool(value);
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
proto.tensors.Attribute.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tensors.Attribute.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensors.Attribute} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensors.Attribute.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getModule();
  if (f != null) {
    writer.writeMessage(3, f, proto.tensors.Module.serializeBinaryToWriter);
  }
  f = message.getTensor();
  if (f != null) {
    writer.writeMessage(4, f, proto.tensors.Tensor.serializeBinaryToWriter);
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(5, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(6, f);
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeFloat(7, f);
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(8, f);
  }
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensors.Attribute.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional Module module = 3;
 * @return {?proto.tensors.Module}
 */
proto.tensors.Attribute.prototype.getModule = function () {
  return /** @type{?proto.tensors.Module} */ (
    jspb.Message.getWrapperField(this, proto.tensors.Module, 3)
  );
};

/**
 * @param {?proto.tensors.Module|undefined} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setModule = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearModule = function () {
  return this.setModule(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasModule = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Tensor tensor = 4;
 * @return {?proto.tensors.Tensor}
 */
proto.tensors.Attribute.prototype.getTensor = function () {
  return /** @type{?proto.tensors.Tensor} */ (
    jspb.Message.getWrapperField(this, proto.tensors.Tensor, 4)
  );
};

/**
 * @param {?proto.tensors.Tensor|undefined} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setTensor = function (value) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearTensor = function () {
  return this.setTensor(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasTensor = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional string string = 5;
 * @return {string}
 */
proto.tensors.Attribute.prototype.getString = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};

/**
 * @param {string} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setString = function (value) {
  return jspb.Message.setOneofField(
    this,
    5,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearString = function () {
  return jspb.Message.setOneofField(
    this,
    5,
    proto.tensors.Attribute.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasString = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional int64 int64 = 6;
 * @return {number}
 */
proto.tensors.Attribute.prototype.getInt64 = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};

/**
 * @param {number} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setInt64 = function (value) {
  return jspb.Message.setOneofField(
    this,
    6,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearInt64 = function () {
  return jspb.Message.setOneofField(
    this,
    6,
    proto.tensors.Attribute.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasInt64 = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional float float = 7;
 * @return {number}
 */
proto.tensors.Attribute.prototype.getFloat = function () {
  return /** @type {number} */ (
    jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0)
  );
};

/**
 * @param {number} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setFloat = function (value) {
  return jspb.Message.setOneofField(
    this,
    7,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearFloat = function () {
  return jspb.Message.setOneofField(
    this,
    7,
    proto.tensors.Attribute.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasFloat = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional bool bool = 8;
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.getBool = function () {
  return /** @type {boolean} */ (
    jspb.Message.getBooleanFieldWithDefault(this, 8, false)
  );
};

/**
 * @param {boolean} value
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.setBool = function (value) {
  return jspb.Message.setOneofField(
    this,
    8,
    proto.tensors.Attribute.oneofGroups_[0],
    value
  );
};

/**
 * Clears the field making it undefined.
 * @return {!proto.tensors.Attribute} returns this
 */
proto.tensors.Attribute.prototype.clearBool = function () {
  return jspb.Message.setOneofField(
    this,
    8,
    proto.tensors.Attribute.oneofGroups_[0],
    undefined
  );
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensors.Attribute.prototype.hasBool = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensors.Module.repeatedFields_ = [2, 3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tensors.Module.prototype.toObject = function (opt_includeInstance) {
    return proto.tensors.Module.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tensors.Module} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tensors.Module.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ""),
        namesList:
          (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
        attributesList: jspb.Message.toObjectList(
          msg.getAttributesList(),
          proto.tensors.Attribute.toObject,
          includeInstance
        ),
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
 * @return {!proto.tensors.Module}
 */
proto.tensors.Module.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensors.Module();
  return proto.tensors.Module.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensors.Module} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensors.Module}
 */
proto.tensors.Module.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.addNames(value);
        break;
      case 3:
        var value = new proto.tensors.Attribute();
        reader.readMessage(
          value,
          proto.tensors.Attribute.deserializeBinaryFromReader
        );
        msg.addAttributes(value);
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
proto.tensors.Module.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.tensors.Module.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensors.Module} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensors.Module.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(2, f);
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tensors.Attribute.serializeBinaryToWriter
    );
  }
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensors.Module.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};

/**
 * @param {string} value
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.tensors.Module.prototype.getNamesList = function () {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};

/**
 * @param {!Array<string>} value
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.setNamesList = function (value) {
  return jspb.Message.setField(this, 2, value || []);
};

/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.addNames = function (value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.clearNamesList = function () {
  return this.setNamesList([]);
};

/**
 * repeated Attribute attributes = 3;
 * @return {!Array<!proto.tensors.Attribute>}
 */
proto.tensors.Module.prototype.getAttributesList = function () {
  return /** @type{!Array<!proto.tensors.Attribute>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensors.Attribute, 3)
  );
};

/**
 * @param {!Array<!proto.tensors.Attribute>} value
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.setAttributesList = function (value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.tensors.Attribute=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensors.Attribute}
 */
proto.tensors.Module.prototype.addAttributes = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.tensors.Attribute,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensors.Module} returns this
 */
proto.tensors.Module.prototype.clearAttributesList = function () {
  return this.setAttributesList([]);
};

/**
 * @enum {number}
 */
proto.tensors.Dtype = {
  DT_INVALID: 0,
  DT_FLOAT32: 1,
  DT_FLOAT64: 2,
  DT_FLOAT16: 3,
  DT_BFLOAT16: 4,
  DT_COMPLEX32: 5,
  DT_COMPLEX64: 6,
  DT_COMPLEX128: 7,
  DT_UINT8: 8,
  DT_INT8: 9,
  DT_INT16: 10,
  DT_INT32: 11,
  DT_INT64: 12,
  DT_BOOL: 13,
  DT_QUINT8: 14,
  DT_QINT8: 15,
  DT_QINT32: 16,
  DT_QUINT4_2: 17,
};

/**
 * @enum {number}
 */
proto.tensors.AttributeType = {
  AT_PARAMETER: 0,
  AT_BUFFER: 1,
};

goog.object.extend(exports, proto.tensors);
