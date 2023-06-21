import { persisted } from "svelte-local-storage-store"

// These fields are derived from the Standard KYC Fields outlined in SEP-0009
// https://github.com/stellar/stellar-protocol/blob/master/ecosystem/sep-0009.md
export const kycStore = persisted('bpa:kycStore', {
    last_name: '',
    first_name: '',
    additional_name: '',
    address_country_code: '',
    state_or_province: '',
    city: '',
    postal_code: '',
    address: '',
    mobile_number: '',
    email_address: '',
    birth_date: '',
    birth_place: '',
    birth_country_code: '',
    bank_account_number: '',
    bank_account_type: '',
    bank_number: '',
    bank_phone_number: '',
    bank_branch_number: '',
    clabe_number: '',
    tax_id: '',
    tax_id_name: '',
    occupation: '',
    employer_name: '',
    employer_address: '',
    language_code: '',
    id_type: '',
    id_country_code: '',
    id_issue_date: '',
    id_expiration_date: '',
    id_number: '',
    photo_id_front: '',
    photo_id_back: '',
    notary_approval_of_photo_id: '',
    ip_address: '',
    photo_proof_residence: '',
    sex: '',
    proof_of_income: '',
    proof_of_liveness: '',
    cbu_number: '',
    cbu_alias: '',
})
