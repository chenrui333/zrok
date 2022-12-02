// Code generated by go-swagger; DO NOT EDIT.

package admin

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// New creates a new admin API client.
func New(transport runtime.ClientTransport, formats strfmt.Registry) ClientService {
	return &Client{transport: transport, formats: formats}
}

/*
Client for admin API
*/
type Client struct {
	transport runtime.ClientTransport
	formats   strfmt.Registry
}

// ClientOption is the option for Client methods
type ClientOption func(*runtime.ClientOperation)

// ClientService is the interface for Client methods
type ClientService interface {
	CreateFrontend(params *CreateFrontendParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateFrontendCreated, error)

	DeleteFrontend(params *DeleteFrontendParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteFrontendOK, error)

	SetTransport(transport runtime.ClientTransport)
}

/*
CreateFrontend create frontend API
*/
func (a *Client) CreateFrontend(params *CreateFrontendParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*CreateFrontendCreated, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewCreateFrontendParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "createFrontend",
		Method:             "POST",
		PathPattern:        "/frontend",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &CreateFrontendReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*CreateFrontendCreated)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for createFrontend: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

/*
DeleteFrontend delete frontend API
*/
func (a *Client) DeleteFrontend(params *DeleteFrontendParams, authInfo runtime.ClientAuthInfoWriter, opts ...ClientOption) (*DeleteFrontendOK, error) {
	// TODO: Validate the params before sending
	if params == nil {
		params = NewDeleteFrontendParams()
	}
	op := &runtime.ClientOperation{
		ID:                 "deleteFrontend",
		Method:             "DELETE",
		PathPattern:        "/frontend",
		ProducesMediaTypes: []string{"application/zrok.v1+json"},
		ConsumesMediaTypes: []string{"application/zrok.v1+json"},
		Schemes:            []string{"http"},
		Params:             params,
		Reader:             &DeleteFrontendReader{formats: a.formats},
		AuthInfo:           authInfo,
		Context:            params.Context,
		Client:             params.HTTPClient,
	}
	for _, opt := range opts {
		opt(op)
	}

	result, err := a.transport.Submit(op)
	if err != nil {
		return nil, err
	}
	success, ok := result.(*DeleteFrontendOK)
	if ok {
		return success, nil
	}
	// unexpected success response
	// safeguard: normally, absent a default response, unknown success responses return an error above: so this is a codegen issue
	msg := fmt.Sprintf("unexpected success response for deleteFrontend: API contract not enforced by server. Client expected to get an error, but got: %T", result)
	panic(msg)
}

// SetTransport changes the transport on the client
func (a *Client) SetTransport(transport runtime.ClientTransport) {
	a.transport = transport
}
