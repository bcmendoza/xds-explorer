/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for envoy.api.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_api_v2_core_base_pb = require('./envoy/api/v2/core/base_pb.js')

var envoy_api_v2_core_config_source_pb = require('./envoy/api/v2/core/config_source_pb.js')

var envoy_api_v2_discovery_pb = require('./envoy/api/v2/discovery_pb.js')

var envoy_api_v2_route_route_pb = require('./envoy/api/v2/route/route_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var validate_validate_pb = require('./validate/validate_pb.js')

var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.api = {};
proto.envoy.api.v2 = require('./rds_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.RouteDiscoveryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.RouteDiscoveryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.envoy.api.v2.DiscoveryRequest,
 *   !proto.envoy.api.v2.DiscoveryResponse>}
 */
const methodInfo_RouteDiscoveryService_FetchRoutes = new grpc.web.AbstractClientBase.MethodInfo(
  envoy_api_v2_discovery_pb.DiscoveryResponse,
  /** @param {!proto.envoy.api.v2.DiscoveryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  envoy_api_v2_discovery_pb.DiscoveryResponse.deserializeBinary
);


/**
 * @param {!proto.envoy.api.v2.DiscoveryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.envoy.api.v2.DiscoveryResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.envoy.api.v2.DiscoveryResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.envoy.api.v2.RouteDiscoveryServiceClient.prototype.fetchRoutes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.api.v2.RouteDiscoveryService/FetchRoutes',
      request,
      metadata || {},
      methodInfo_RouteDiscoveryService_FetchRoutes,
      callback);
};


/**
 * @param {!proto.envoy.api.v2.DiscoveryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.envoy.api.v2.DiscoveryResponse>}
 *     A native promise that resolves to the response
 */
proto.envoy.api.v2.RouteDiscoveryServicePromiseClient.prototype.fetchRoutes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.api.v2.RouteDiscoveryService/FetchRoutes',
      request,
      metadata || {},
      methodInfo_RouteDiscoveryService_FetchRoutes);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.VirtualHostDiscoveryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.api.v2.VirtualHostDiscoveryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


module.exports = proto.envoy.api.v2;
