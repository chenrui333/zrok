// Code generated by go-swagger; DO NOT EDIT.

package rest_model_zrok

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// UnaccessRequest unaccess request
//
// swagger:model unaccessRequest
type UnaccessRequest struct {

	// svc name
	SvcName string `json:"svcName,omitempty"`

	// z Id
	ZID string `json:"zId,omitempty"`
}

// Validate validates this unaccess request
func (m *UnaccessRequest) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this unaccess request based on context it is used
func (m *UnaccessRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *UnaccessRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *UnaccessRequest) UnmarshalBinary(b []byte) error {
	var res UnaccessRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
