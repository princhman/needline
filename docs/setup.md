# Setup 
> updated on 13th of June 2026
let base_url = your hosting url (eg. `https://needline.princhman.com`), will go under `BASE_URL` as environment variable.

## O. Get a template from railway
a. [![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/needline?referralCode=4x8-sQ&utm_medium=integration&utm_source=template&utm_campaign=generic) start a template

b. Follow instructions bellow to fill environment variables

## 1. Create Linear app 
a. Choose your name, enter other fields

b. In `Linear -> Setttings -> API` you can create application, with redirect URI - `{base_url}/callback`

c. Enable client credentials

d. After app creation, save `Client ID` and `Client Secret`, they will go under `PUBLIC_CLIENT_ID`, `CLIENT_TOKEN` as environment variables respectively.

## 2. Create encryption keys
a. Keys for encryption of cookies and file can be generated with 
```bash
openssl rand -hex 32
```
(you need 2 32 bytes keys), they will go under `COKIE_ENCRYPTION_KEY` and `STORE_FILE_ENCRYPTION_KEY` as environment variables respectively.

b. For JWT encryption codes use: 
```bash
# private key
openssl genrsa -out private.pem 2048

# extract public key
openssl rsa -in private.pem -pubout -out public.pem
```
You wil use private on you company website to encrypt user data, and public should go under `JWT_ENCRYPTION_PUBLIC_KEY` as environment variable.

## 3. Create customer Authentication
> more about how it works you can read [here](./user-auth.md)

a. Get your auth url under `AUTH_URL` environment variable, user will be redirected there with `callback_url` set to `{base_url}/callback/company`

b. When user is authenticated on your side, they need to be redirected to `callback_url` with `user` parameter set to encrypted, with earlier generated private key, stringified user json. See code sample in [here](./user-auth.md).
