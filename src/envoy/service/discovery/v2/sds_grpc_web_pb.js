/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for envoy.service.discovery.v2
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var envoy_api_v2_discovery_pb = require('./envoy/api/v2/discovery_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.envoy = {};
proto.envoy.service = {};
proto.envoy.service.discovery = {};
proto.envoy.service.discovery.v2 = require('./sds_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.envoy.service.discovery.v2.SecretDiscoveryServiceClient =
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
proto.envoy.service.discovery.v2.SecretDiscoveryServicePromiseClient =
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
const methodInfo_SecretDiscoveryService_FetchSecrets = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.envoy.service.discovery.v2.SecretDiscoveryServiceClient.prototype.fetchSecrets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/envoy.service.discovery.v2.SecretDiscoveryService/FetchSecrets',
      request,
      metadata || {},
      methodInfo_SecretDiscoveryService_FetchSecrets,
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
proto.envoy.service.discovery.v2.SecretDiscoveryServicePromiseClient.prototype.fetchSecrets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/envoy.service.discovery.v2.SecretDiscoveryService/FetchSecrets',
      request,
      metadata || {},
      methodInfo_SecretDiscoveryService_FetchSecrets);
};


module.exports = proto.envoy.service.discovery.v2;
