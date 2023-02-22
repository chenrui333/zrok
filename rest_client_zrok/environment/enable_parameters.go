// Code generated by go-swagger; DO NOT EDIT.

package environment

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"

	"github.com/openziti/zrok/rest_model_zrok"
)

// NewEnableParams creates a new EnableParams object,
// with the default timeout for this client.
//
// Default values are not hydrated, since defaults are normally applied by the API server side.
//
// To enforce default values in parameter, use SetDefaults or WithDefaults.
func NewEnableParams() *EnableParams {
	return &EnableParams{
		timeout: cr.DefaultTimeout,
	}
}

// NewEnableParamsWithTimeout creates a new EnableParams object
// with the ability to set a timeout on a request.
func NewEnableParamsWithTimeout(timeout time.Duration) *EnableParams {
	return &EnableParams{
		timeout: timeout,
	}
}

// NewEnableParamsWithContext creates a new EnableParams object
// with the ability to set a context for a request.
func NewEnableParamsWithContext(ctx context.Context) *EnableParams {
	return &EnableParams{
		Context: ctx,
	}
}

// NewEnableParamsWithHTTPClient creates a new EnableParams object
// with the ability to set a custom HTTPClient for a request.
func NewEnableParamsWithHTTPClient(client *http.Client) *EnableParams {
	return &EnableParams{
		HTTPClient: client,
	}
}

/*
EnableParams contains all the parameters to send to the API endpoint

	for the enable operation.

	Typically these are written to a http.Request.
*/
type EnableParams struct {

	// Body.
	Body *rest_model_zrok.EnableRequest

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithDefaults hydrates default values in the enable params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *EnableParams) WithDefaults() *EnableParams {
	o.SetDefaults()
	return o
}

// SetDefaults hydrates default values in the enable params (not the query body).
//
// All values with no default are reset to their zero value.
func (o *EnableParams) SetDefaults() {
	// no default values defined for this parameter
}

// WithTimeout adds the timeout to the enable params
func (o *EnableParams) WithTimeout(timeout time.Duration) *EnableParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the enable params
func (o *EnableParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the enable params
func (o *EnableParams) WithContext(ctx context.Context) *EnableParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the enable params
func (o *EnableParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the enable params
func (o *EnableParams) WithHTTPClient(client *http.Client) *EnableParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the enable params
func (o *EnableParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithBody adds the body to the enable params
func (o *EnableParams) WithBody(body *rest_model_zrok.EnableRequest) *EnableParams {
	o.SetBody(body)
	return o
}

// SetBody adds the body to the enable params
func (o *EnableParams) SetBody(body *rest_model_zrok.EnableRequest) {
	o.Body = body
}

// WriteToRequest writes these params to a swagger request
func (o *EnableParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error
	if o.Body != nil {
		if err := r.SetBodyParam(o.Body); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}