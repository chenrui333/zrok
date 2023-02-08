// Code generated by go-swagger; DO NOT EDIT.

package account

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// ResetPasswordOKCode is the HTTP code returned for type ResetPasswordOK
const ResetPasswordOKCode int = 200

/*
ResetPasswordOK password reset

swagger:response resetPasswordOK
*/
type ResetPasswordOK struct {
}

// NewResetPasswordOK creates ResetPasswordOK with default headers values
func NewResetPasswordOK() *ResetPasswordOK {

	return &ResetPasswordOK{}
}

// WriteResponse to the client
func (o *ResetPasswordOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(200)
}

// ResetPasswordNotFoundCode is the HTTP code returned for type ResetPasswordNotFound
const ResetPasswordNotFoundCode int = 404

/*
ResetPasswordNotFound request not found

swagger:response resetPasswordNotFound
*/
type ResetPasswordNotFound struct {
}

// NewResetPasswordNotFound creates ResetPasswordNotFound with default headers values
func NewResetPasswordNotFound() *ResetPasswordNotFound {

	return &ResetPasswordNotFound{}
}

// WriteResponse to the client
func (o *ResetPasswordNotFound) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(404)
}

// ResetPasswordInternalServerErrorCode is the HTTP code returned for type ResetPasswordInternalServerError
const ResetPasswordInternalServerErrorCode int = 500

/*
ResetPasswordInternalServerError internal server error

swagger:response resetPasswordInternalServerError
*/
type ResetPasswordInternalServerError struct {
}

// NewResetPasswordInternalServerError creates ResetPasswordInternalServerError with default headers values
func NewResetPasswordInternalServerError() *ResetPasswordInternalServerError {

	return &ResetPasswordInternalServerError{}
}

// WriteResponse to the client
func (o *ResetPasswordInternalServerError) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(500)
}