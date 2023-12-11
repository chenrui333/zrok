// Code generated by go-swagger; DO NOT EDIT.

package share

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// UnaccessReader is a Reader for the Unaccess structure.
type UnaccessReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *UnaccessReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewUnaccessOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewUnaccessUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewUnaccessNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewUnaccessInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		return nil, runtime.NewAPIError("[DELETE /unaccess] unaccess", response, response.Code())
	}
}

// NewUnaccessOK creates a UnaccessOK with default headers values
func NewUnaccessOK() *UnaccessOK {
	return &UnaccessOK{}
}

/*
UnaccessOK describes a response with status code 200, with default header values.

access removed
*/
type UnaccessOK struct {
}

// IsSuccess returns true when this unaccess o k response has a 2xx status code
func (o *UnaccessOK) IsSuccess() bool {
	return true
}

// IsRedirect returns true when this unaccess o k response has a 3xx status code
func (o *UnaccessOK) IsRedirect() bool {
	return false
}

// IsClientError returns true when this unaccess o k response has a 4xx status code
func (o *UnaccessOK) IsClientError() bool {
	return false
}

// IsServerError returns true when this unaccess o k response has a 5xx status code
func (o *UnaccessOK) IsServerError() bool {
	return false
}

// IsCode returns true when this unaccess o k response a status code equal to that given
func (o *UnaccessOK) IsCode(code int) bool {
	return code == 200
}

// Code gets the status code for the unaccess o k response
func (o *UnaccessOK) Code() int {
	return 200
}

func (o *UnaccessOK) Error() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessOK ", 200)
}

func (o *UnaccessOK) String() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessOK ", 200)
}

func (o *UnaccessOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewUnaccessUnauthorized creates a UnaccessUnauthorized with default headers values
func NewUnaccessUnauthorized() *UnaccessUnauthorized {
	return &UnaccessUnauthorized{}
}

/*
UnaccessUnauthorized describes a response with status code 401, with default header values.

unauthorized
*/
type UnaccessUnauthorized struct {
}

// IsSuccess returns true when this unaccess unauthorized response has a 2xx status code
func (o *UnaccessUnauthorized) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this unaccess unauthorized response has a 3xx status code
func (o *UnaccessUnauthorized) IsRedirect() bool {
	return false
}

// IsClientError returns true when this unaccess unauthorized response has a 4xx status code
func (o *UnaccessUnauthorized) IsClientError() bool {
	return true
}

// IsServerError returns true when this unaccess unauthorized response has a 5xx status code
func (o *UnaccessUnauthorized) IsServerError() bool {
	return false
}

// IsCode returns true when this unaccess unauthorized response a status code equal to that given
func (o *UnaccessUnauthorized) IsCode(code int) bool {
	return code == 401
}

// Code gets the status code for the unaccess unauthorized response
func (o *UnaccessUnauthorized) Code() int {
	return 401
}

func (o *UnaccessUnauthorized) Error() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessUnauthorized ", 401)
}

func (o *UnaccessUnauthorized) String() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessUnauthorized ", 401)
}

func (o *UnaccessUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewUnaccessNotFound creates a UnaccessNotFound with default headers values
func NewUnaccessNotFound() *UnaccessNotFound {
	return &UnaccessNotFound{}
}

/*
UnaccessNotFound describes a response with status code 404, with default header values.

not found
*/
type UnaccessNotFound struct {
}

// IsSuccess returns true when this unaccess not found response has a 2xx status code
func (o *UnaccessNotFound) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this unaccess not found response has a 3xx status code
func (o *UnaccessNotFound) IsRedirect() bool {
	return false
}

// IsClientError returns true when this unaccess not found response has a 4xx status code
func (o *UnaccessNotFound) IsClientError() bool {
	return true
}

// IsServerError returns true when this unaccess not found response has a 5xx status code
func (o *UnaccessNotFound) IsServerError() bool {
	return false
}

// IsCode returns true when this unaccess not found response a status code equal to that given
func (o *UnaccessNotFound) IsCode(code int) bool {
	return code == 404
}

// Code gets the status code for the unaccess not found response
func (o *UnaccessNotFound) Code() int {
	return 404
}

func (o *UnaccessNotFound) Error() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessNotFound ", 404)
}

func (o *UnaccessNotFound) String() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessNotFound ", 404)
}

func (o *UnaccessNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewUnaccessInternalServerError creates a UnaccessInternalServerError with default headers values
func NewUnaccessInternalServerError() *UnaccessInternalServerError {
	return &UnaccessInternalServerError{}
}

/*
UnaccessInternalServerError describes a response with status code 500, with default header values.

internal server error
*/
type UnaccessInternalServerError struct {
}

// IsSuccess returns true when this unaccess internal server error response has a 2xx status code
func (o *UnaccessInternalServerError) IsSuccess() bool {
	return false
}

// IsRedirect returns true when this unaccess internal server error response has a 3xx status code
func (o *UnaccessInternalServerError) IsRedirect() bool {
	return false
}

// IsClientError returns true when this unaccess internal server error response has a 4xx status code
func (o *UnaccessInternalServerError) IsClientError() bool {
	return false
}

// IsServerError returns true when this unaccess internal server error response has a 5xx status code
func (o *UnaccessInternalServerError) IsServerError() bool {
	return true
}

// IsCode returns true when this unaccess internal server error response a status code equal to that given
func (o *UnaccessInternalServerError) IsCode(code int) bool {
	return code == 500
}

// Code gets the status code for the unaccess internal server error response
func (o *UnaccessInternalServerError) Code() int {
	return 500
}

func (o *UnaccessInternalServerError) Error() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessInternalServerError ", 500)
}

func (o *UnaccessInternalServerError) String() string {
	return fmt.Sprintf("[DELETE /unaccess][%d] unaccessInternalServerError ", 500)
}

func (o *UnaccessInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
