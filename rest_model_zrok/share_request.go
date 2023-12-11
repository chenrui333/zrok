// Code generated by go-swagger; DO NOT EDIT.

package rest_model_zrok

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// ShareRequest share request
//
// swagger:model shareRequest
type ShareRequest struct {

	// auth scheme
	AuthScheme string `json:"authScheme,omitempty"`

	// auth users
	AuthUsers []*AuthUser `json:"authUsers"`

	// backend mode
	// Enum: [proxy web tcpTunnel udpTunnel caddy drive]
	BackendMode string `json:"backendMode,omitempty"`

	// backend proxy endpoint
	BackendProxyEndpoint string `json:"backendProxyEndpoint,omitempty"`

	// env z Id
	EnvZID string `json:"envZId,omitempty"`

	// frontend selection
	FrontendSelection []string `json:"frontendSelection"`

	// oauth authorization check interval
	OauthAuthorizationCheckInterval string `json:"oauthAuthorizationCheckInterval,omitempty"`

	// oauth email domains
	OauthEmailDomains []string `json:"oauthEmailDomains"`

	// oauth provider
	// Enum: [github google]
	OauthProvider string `json:"oauthProvider,omitempty"`

	// reserved
	Reserved bool `json:"reserved,omitempty"`

	// share mode
	// Enum: [public private]
	ShareMode string `json:"shareMode,omitempty"`

	// unique name
	UniqueName string `json:"uniqueName,omitempty"`
}

// Validate validates this share request
func (m *ShareRequest) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAuthUsers(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateBackendMode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateOauthProvider(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateShareMode(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ShareRequest) validateAuthUsers(formats strfmt.Registry) error {
	if swag.IsZero(m.AuthUsers) { // not required
		return nil
	}

	for i := 0; i < len(m.AuthUsers); i++ {
		if swag.IsZero(m.AuthUsers[i]) { // not required
			continue
		}

		if m.AuthUsers[i] != nil {
			if err := m.AuthUsers[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("authUsers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("authUsers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

var shareRequestTypeBackendModePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["proxy","web","tcpTunnel","udpTunnel","caddy","drive"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		shareRequestTypeBackendModePropEnum = append(shareRequestTypeBackendModePropEnum, v)
	}
}

const (

	// ShareRequestBackendModeProxy captures enum value "proxy"
	ShareRequestBackendModeProxy string = "proxy"

	// ShareRequestBackendModeWeb captures enum value "web"
	ShareRequestBackendModeWeb string = "web"

	// ShareRequestBackendModeTCPTunnel captures enum value "tcpTunnel"
	ShareRequestBackendModeTCPTunnel string = "tcpTunnel"

	// ShareRequestBackendModeUDPTunnel captures enum value "udpTunnel"
	ShareRequestBackendModeUDPTunnel string = "udpTunnel"

	// ShareRequestBackendModeCaddy captures enum value "caddy"
	ShareRequestBackendModeCaddy string = "caddy"

	// ShareRequestBackendModeDrive captures enum value "drive"
	ShareRequestBackendModeDrive string = "drive"
)

// prop value enum
func (m *ShareRequest) validateBackendModeEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, shareRequestTypeBackendModePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *ShareRequest) validateBackendMode(formats strfmt.Registry) error {
	if swag.IsZero(m.BackendMode) { // not required
		return nil
	}

	// value enum
	if err := m.validateBackendModeEnum("backendMode", "body", m.BackendMode); err != nil {
		return err
	}

	return nil
}

var shareRequestTypeOauthProviderPropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["github","google"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		shareRequestTypeOauthProviderPropEnum = append(shareRequestTypeOauthProviderPropEnum, v)
	}
}

const (

	// ShareRequestOauthProviderGithub captures enum value "github"
	ShareRequestOauthProviderGithub string = "github"

	// ShareRequestOauthProviderGoogle captures enum value "google"
	ShareRequestOauthProviderGoogle string = "google"
)

// prop value enum
func (m *ShareRequest) validateOauthProviderEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, shareRequestTypeOauthProviderPropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *ShareRequest) validateOauthProvider(formats strfmt.Registry) error {
	if swag.IsZero(m.OauthProvider) { // not required
		return nil
	}

	// value enum
	if err := m.validateOauthProviderEnum("oauthProvider", "body", m.OauthProvider); err != nil {
		return err
	}

	return nil
}

var shareRequestTypeShareModePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["public","private"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		shareRequestTypeShareModePropEnum = append(shareRequestTypeShareModePropEnum, v)
	}
}

const (

	// ShareRequestShareModePublic captures enum value "public"
	ShareRequestShareModePublic string = "public"

	// ShareRequestShareModePrivate captures enum value "private"
	ShareRequestShareModePrivate string = "private"
)

// prop value enum
func (m *ShareRequest) validateShareModeEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, shareRequestTypeShareModePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *ShareRequest) validateShareMode(formats strfmt.Registry) error {
	if swag.IsZero(m.ShareMode) { // not required
		return nil
	}

	// value enum
	if err := m.validateShareModeEnum("shareMode", "body", m.ShareMode); err != nil {
		return err
	}

	return nil
}

// ContextValidate validate this share request based on the context it is used
func (m *ShareRequest) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	var res []error

	if err := m.contextValidateAuthUsers(ctx, formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *ShareRequest) contextValidateAuthUsers(ctx context.Context, formats strfmt.Registry) error {

	for i := 0; i < len(m.AuthUsers); i++ {

		if m.AuthUsers[i] != nil {

			if swag.IsZero(m.AuthUsers[i]) { // not required
				return nil
			}

			if err := m.AuthUsers[i].ContextValidate(ctx, formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("authUsers" + "." + strconv.Itoa(i))
				} else if ce, ok := err.(*errors.CompositeError); ok {
					return ce.ValidateName("authUsers" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *ShareRequest) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *ShareRequest) UnmarshalBinary(b []byte) error {
	var res ShareRequest
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
