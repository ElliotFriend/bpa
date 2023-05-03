import * as tslib_1 from 'tslib'
import albedo from '@albedo-link/intent'
import StellarSdk, { TransactionBuilder, Networks } from 'stellar-sdk'
import freighterApi from '@stellar/freighter-api'
import LedgerStr from '@ledgerhq/hw-app-str'
import LedgerTransport from '@ledgerhq/hw-transport-u2f'
import TrezorConnect from 'trezor-connect'
import BigNumber from 'bignumber.js'
import 'scrypt-async'
import nacl from 'tweetnacl'
import 'tweetnacl-util'
import queryString from 'query-string'
import isEqual from 'lodash/isEqual.js'
var EffectType
;(function (EffectType2) {
    EffectType2['account_created'] = 'account_created'
    EffectType2['account_credited'] = 'account_credited'
    EffectType2['account_debited'] = 'account_debited'
    EffectType2['account_home_domain_updated'] = 'account_home_domain_updated'
    EffectType2['account_inflation_destination_updated'] = 'account_inflation_destination_updated'
    EffectType2['account_removed'] = 'account_removed'
    EffectType2['account_thresholds_updated'] = 'account_thresholds_updated'
    EffectType2['signer_created'] = 'signer_created'
    EffectType2['signer_removed'] = 'signer_removed'
    EffectType2['signer_updated'] = 'signer_updated'
    EffectType2['trade'] = 'trade'
    EffectType2['trustline_created'] = 'trustline_created'
    EffectType2['trustline_removed'] = 'trustline_removed'
    EffectType2['trustline_updated'] = 'trustline_updated'
})(EffectType || (EffectType = {}))
var KeyType
;(function (KeyType2) {
    KeyType2['albedo'] = 'albedo'
    KeyType2['ledger'] = 'ledger'
    KeyType2['freighter'] = 'freighter'
    KeyType2['plaintextKey'] = 'plaintextKey'
    KeyType2['trezor'] = 'trezor'
})(KeyType || (KeyType = {}))
var TransferResponseType
;(function (TransferResponseType2) {
    TransferResponseType2['ok'] = 'ok'
    TransferResponseType2['non_interactive_customer_info_needed'] =
        'non_interactive_customer_info_needed'
    TransferResponseType2['interactive_customer_info_needed'] = 'interactive_customer_info_needed'
    TransferResponseType2['customer_info_status'] = 'customer_info_status'
    TransferResponseType2['error'] = 'error'
})(TransferResponseType || (TransferResponseType = {}))
var TransactionStatus
;(function (TransactionStatus2) {
    TransactionStatus2['incomplete'] = 'incomplete'
    TransactionStatus2['pending_user_transfer_start'] = 'pending_user_transfer_start'
    TransactionStatus2['pending_user_transfer_complete'] = 'pending_user_transfer_complete'
    TransactionStatus2['pending_external'] = 'pending_external'
    TransactionStatus2['pending_anchor'] = 'pending_anchor'
    TransactionStatus2['pending_stellar'] = 'pending_stellar'
    TransactionStatus2['pending_trust'] = 'pending_trust'
    TransactionStatus2['pending_user'] = 'pending_user'
    TransactionStatus2['completed'] = 'completed'
    TransactionStatus2['refunded'] = 'refunded'
    TransactionStatus2['no_market'] = 'no_market'
    TransactionStatus2['too_small'] = 'too_small'
    TransactionStatus2['too_large'] = 'too_large'
    TransactionStatus2['error'] = 'error'
})(TransactionStatus || (TransactionStatus = {}))
var ApprovalResponseStatus
;(function (ApprovalResponseStatus2) {
    ApprovalResponseStatus2['success'] = 'success'
    ApprovalResponseStatus2['revised'] = 'revised'
    ApprovalResponseStatus2['pending'] = 'pending'
    ApprovalResponseStatus2['actionRequired'] = 'action_required'
    ApprovalResponseStatus2['rejected'] = 'rejected'
})(ApprovalResponseStatus || (ApprovalResponseStatus = {}))
var ActionResult
;(function (ActionResult2) {
    ActionResult2['noFurtherActionRequired'] = 'no_further_action_required'
    ActionResult2['followNextUrl'] = 'follow_next_url'
})(ActionResult || (ActionResult = {}))
;({
    keyType: KeyType.albedo,
    signTransaction: function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transaction, key, xdr, response, error_1
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;(transaction = params.transaction), (key = params.key)
                        if (key.privateKey !== '') {
                            throw new Error(
                                'Non-ledger key sent to ledger handler: ' +
                                    JSON.stringify(key.publicKey)
                            )
                        }
                        _a.label = 1
                    case 1:
                        _a.trys.push([1, 3, , 4])
                        xdr = transaction.toXDR()
                        return [4, albedo.tx({ xdr })]
                    case 2:
                        response = _a.sent()
                        if (!response.signed_envelope_xdr) {
                            throw new Error('We couldn’t sign the transaction with Albedo.')
                        }
                        return [
                            2,
                            TransactionBuilder.fromXDR(
                                response.signed_envelope_xdr,
                                Networks.PUBLIC
                            ),
                        ]
                    case 3:
                        error_1 = _a.sent()
                        throw new Error(
                            'We couldn’t sign the transaction with Albedo. ' +
                                error_1.toString() +
                                '.'
                        )
                    case 4:
                        return [2]
                }
            })
        })
    },
})
;({
    keyType: KeyType.freighter,
    signTransaction: function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transaction, key, custom, response, error_1
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;(transaction = params.transaction),
                            (key = params.key),
                            (custom = params.custom)
                        if (key.privateKey !== '') {
                            throw new Error(
                                'Non-ledger key sent to ledger handler: ' +
                                    JSON.stringify(key.publicKey)
                            )
                        }
                        _a.label = 1
                    case 1:
                        _a.trys.push([1, 3, , 4])
                        return [
                            4,
                            freighterApi.signTransaction(
                                transaction.toXDR(),
                                custom && custom.network ? custom.network : void 0
                            ),
                        ]
                    case 2:
                        response = _a.sent()
                        return [2, TransactionBuilder.fromXDR(response, Networks.PUBLIC)]
                    case 3:
                        error_1 = _a.sent()
                        throw new Error(
                            'We couldn’t sign the transaction with Freighter. ' +
                                error_1.toString() +
                                '.'
                        )
                    case 4:
                        return [2]
                }
            })
        })
    },
})
;({
    keyType: KeyType.ledger,
    signTransaction: function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transaction, key, transport, ledgerApi, result, keyPair, decoratedSignature
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;(transaction = params.transaction), (key = params.key)
                        if (key.privateKey !== '') {
                            throw new Error(
                                'Non-ledger key sent to ledger handler: ' +
                                    JSON.stringify(key.publicKey)
                            )
                        }
                        return [4, LedgerTransport.create(60 * 1e3)]
                    case 1:
                        transport = _a.sent()
                        ledgerApi = new LedgerStr(transport)
                        return [4, ledgerApi.signTransaction(key.path, transaction.signatureBase())]
                    case 2:
                        result = _a.sent()
                        keyPair = StellarSdk.Keypair.fromPublicKey(key.publicKey)
                        decoratedSignature = new StellarSdk.xdr.DecoratedSignature({
                            hint: keyPair.signatureHint(),
                            signature: result.signature,
                        })
                        transaction.signatures.push(decoratedSignature)
                        return [2, Promise.resolve(transaction)]
                }
            })
        })
    },
})
;({
    keyType: KeyType.ledger,
    signTransaction: function (params) {
        var transaction = params.transaction,
            key = params.key
        if (key.privateKey === '') {
            throw new Error(
                'Non-plaintext key sent to plaintext handler: ' + JSON.stringify(key.publicKey)
            )
        }
        var keyPair = StellarSdk.Keypair.fromSecret(key.privateKey)
        transaction.sign(keyPair)
        return Promise.resolve(transaction)
    },
})
var transformSigner = function (signer) {
    var type = 0
    var key
    var weight = signer.weight
    if (typeof signer.ed25519PublicKey === 'string') {
        var keyPair = StellarSdk.Keypair.fromPublicKey(signer.ed25519PublicKey)
        key = keyPair.rawPublicKey().toString('hex')
    }
    if (signer.preAuthTx instanceof Buffer) {
        type = 1
        key = signer.preAuthTx.toString('hex')
    }
    if (signer.sha256Hash instanceof Buffer) {
        type = 2
        key = signer.sha256Hash.toString('hex')
    }
    return {
        type,
        key,
        weight,
    }
}
var transformAsset = function (asset) {
    if (asset.isNative()) {
        return {
            type: 0,
            code: asset.getCode(),
        }
    }
    return {
        type: asset.getAssetType() === 'credit_alphanum4' ? 1 : 2,
        code: asset.getCode(),
        issuer: asset.getIssuer(),
    }
}
var transformAmount = function (amount) {
    return new BigNumber(amount).times(1e7).toString()
}
var transformType = function (type) {
    switch (type) {
        case 'pathPaymentStrictReceive':
            return 'pathPayment'
        case 'createPassiveSellOffer':
            return 'createPassiveOffer'
        case 'manageSellOffer':
            return 'manageOffer'
        default:
            return type
    }
}
var transformMemo = function (memo) {
    switch (memo.type) {
        case StellarSdk.MemoText:
            return { type: 1, text: memo.value }
        case StellarSdk.MemoID:
            return { type: 2, id: memo.value }
        case StellarSdk.MemoHash:
            return { type: 3, hash: memo.value ? memo.value.toString('hex') : '' }
        case StellarSdk.MemoReturn:
            return { type: 4, hash: memo.value ? memo.value.toString('hex') : '' }
        default:
            return { type: 0 }
    }
}
var transformTimebounds = function (timebounds) {
    if (!timebounds) {
        return void 0
    }
    return {
        minTime: Number.parseInt(timebounds.minTime, 10),
        maxTime: Number.parseInt(timebounds.maxTime, 10),
    }
}
var transformTransaction = function (path, transaction) {
    var amounts = ['amount', 'sendMax', 'destAmount', 'startingBalance', 'limit']
    var assets = ['asset', 'sendAsset', 'destAsset', 'selling', 'buying', 'line']
    var operations = transaction.operations.map(function (o, i) {
        var operation = tslib_1.__assign({}, o)
        if (operation.signer) {
            operation.signer = transformSigner(operation.signer)
        }
        if (operation.path) {
            operation.path = operation.path.map(transformAsset)
        }
        if (typeof operation.price === 'string') {
            var xdrOperation = transaction.tx.operations()[i]
            operation.price = {
                n: xdrOperation.body().value().price().n(),
                d: xdrOperation.body().value().price().d(),
            }
        }
        amounts.forEach(function (field) {
            if (typeof operation[field] === 'string') {
                operation[field] = transformAmount(operation[field])
            }
        })
        assets.forEach(function (field) {
            if (operation[field]) {
                operation[field] = transformAsset(operation[field])
            }
        })
        if (operation.type === 'allowTrust') {
            var allowTrustAsset = new StellarSdk.Asset(operation.assetCode, operation.trustor)
            operation.assetType = transformAsset(allowTrustAsset).type
        }
        if (operation.type === 'manageData' && operation.value) {
            operation.value = operation.value.toString('hex')
        }
        operation.type = transformType(o.type)
        return operation
    })
    return {
        path,
        networkPassphrase: transaction.networkPassphrase,
        transaction: {
            source: transaction.source,
            fee: Number(transaction.fee),
            sequence: transaction.sequence,
            memo: transformMemo(transaction.memo),
            timebounds: transformTimebounds(transaction.timeBounds),
            operations,
        },
    }
}
;({
    keyType: KeyType.trezor,
    signTransaction: function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transaction, key, custom, trezorParams, response, signature, error_1
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ;(transaction = params.transaction),
                            (key = params.key),
                            (custom = params.custom)
                        if (key.privateKey !== '') {
                            throw new Error(
                                'Non-ledger key sent to ledger handler: ' +
                                    JSON.stringify(key.publicKey)
                            )
                        }
                        if (!custom || !custom.email || !custom.appUrl) {
                            throw new Error(
                                'Trezor Connect manifest with "email" and "appUrl" props is required.\n        Make sure they are passed through "custom" prop.'
                            )
                        }
                        _a.label = 1
                    case 1:
                        _a.trys.push([1, 3, , 4])
                        TrezorConnect.manifest({
                            email: custom.email,
                            appUrl: custom.appUrl,
                        })
                        trezorParams = transformTransaction("m/44'/148'/0'", transaction)
                        return [4, TrezorConnect.stellarSignTransaction(trezorParams)]
                    case 2:
                        response = _a.sent()
                        if (response.success) {
                            signature = Buffer.from(response.payload.signature, 'hex').toString(
                                'base64'
                            )
                            transaction.addSignature(key.publicKey, signature)
                            return [2, transaction]
                        }
                        throw new Error(
                            response.payload.error ||
                                'We couldn’t sign the transaction with Trezor.'
                        )
                    case 3:
                        error_1 = _a.sent()
                        throw new Error(
                            'We couldn’t sign the transaction with Trezor. ' +
                                error_1.toString() +
                                '.'
                        )
                    case 4:
                        return [2]
                }
            })
        })
    },
})
nacl.secretbox.nonceLength
nacl.secretbox.keyLength
nacl.secretbox.keyLength
function getKycUrl(params) {
    var _a = new URL(params.response.url),
        origin = _a.origin,
        pathname = _a.pathname,
        search = _a.search,
        hash = _a.hash
    var callback = ''
    var _b = params,
        callback_url = _b.callback_url,
        request = _b.request
    if (callback_url === 'postMessage') {
        callback = (search ? '&' : '?') + 'callback=postMessage'
    } else if (callback_url && request) {
        var url = new URL(callback_url)
        var newParams = tslib_1.__assign({}, queryString.parse(url.search))
        newParams.request = encodeURIComponent(JSON.stringify(request))
        url.search = queryString.stringify(newParams)
        callback = (search ? '&' : '?') + 'callback=' + encodeURIComponent(url.toString())
    }
    return '' + origin + pathname + search + callback + hash
}
function fetchKycInBrowser(params) {
    var response = params.response,
        windowContext = params.window
    var origin = new URL(response.url).origin
    return new Promise(function (resolve, reject) {
        var handleMessage = function (e) {
            if (e.origin !== origin) {
                return
            }
            windowContext.removeEventListener('message', handleMessage)
            windowContext.close()
            if (e.data.status === 'success') {
                resolve(e.data)
            } else {
                reject(e.data)
            }
        }
        windowContext.addEventListener('message', handleMessage)
        windowContext.location.href = getKycUrl({
            response,
            callback_url: 'postMessage',
        })
    })
}
function isValidInfoResponse(obj) {
    return obj.withdraw !== void 0 && obj.deposit !== void 0
}
function parseInfo(info) {
    if (!isValidInfoResponse(info)) {
        throw new Error("The endpoint didn't return a valid info response!")
    }
    var _a = info,
        fee = _a.fee,
        transactions = _a.transactions,
        transaction = _a.transaction
    return {
        withdraw: parseWithdraw(info),
        deposit: parseDeposit(info),
        fee,
        transactions,
        transaction,
    }
}
var parseFee = function (_a, feeEnabled) {
    var fee_fixed = _a.fee_fixed,
        fee_percent = _a.fee_percent
    if (
        (fee_fixed !== void 0 && Number(fee_fixed) >= 0) ||
        (fee_percent !== void 0 && Number(fee_percent) >= 0)
    ) {
        return {
            type: 'simple',
            fixed: fee_fixed,
            percent: fee_percent,
        }
    } else {
        return {
            type: feeEnabled ? 'complex' : 'none',
        }
    }
}
function parseType(_a) {
    var typeName = _a[0],
        type = _a[1]
    return {
        name: typeName,
        fields: Object.entries(type.fields || {}).map(parseField),
    }
}
function parseField(_a) {
    var fieldName = _a[0],
        field = _a[1]
    return tslib_1.__assign({}, field, { name: fieldName })
}
function parseWithdraw(info) {
    return Object.entries(info.withdraw).reduce(function (accum, _a) {
        var asset_code = _a[0],
            entry = _a[1]
        var fee = parseFee(entry, !!(info.fee && info.fee.enabled))
        accum[asset_code] = {
            asset_code,
            fee,
            min_amount: entry.min_amount,
            max_amount: entry.max_amount,
            authentication_required: !!entry.authentication_required,
            types: Object.entries(entry.types || {}).map(parseType),
        }
        return accum
    }, {})
}
function parseDeposit(info) {
    return Object.entries(info.deposit).reduce(function (accum, _a) {
        var asset_code = _a[0],
            entry = _a[1]
        var fee = parseFee(entry, !!(info.fee && info.fee.enabled))
        accum[asset_code] = {
            asset_code,
            fee,
            min_amount: entry.min_amount,
            max_amount: entry.max_amount,
            authentication_required: !!entry.authentication_required,
            fields: Object.entries(entry.fields || {}).map(parseField),
        }
        return accum
    }, {})
}
function _normalizeTransaction(transaction) {
    if (transaction._id && transaction.id === void 0) {
        transaction.id = transaction._id
    }
    if (
        transaction.amount &&
        transaction.amount_in === void 0 &&
        transaction.amount_out === void 0
    ) {
        transaction.amount_in = transaction.amount
        transaction.amount_out = transaction.amount
    }
    return transaction
}
var TransferProvider = (function () {
    function TransferProvider2(transferServer, account, lang, operation) {
        if (!transferServer) {
            throw new Error('Required parameter `transferServer` missing!')
        }
        if (!account) {
            throw new Error('Required parameter `account` missing!')
        }
        if (!operation) {
            throw new Error('Required parameter `operation` missing!')
        }
        this.transferServer = transferServer.replace(/\/$/, '')
        this.operation = operation
        this.account = account
        this.lang = lang
        this._watchOneTransactionRegistry = {}
        this._watchAllTransactionsRegistry = {}
        this._transactionsRegistry = {}
        this._transactionsIgnoredRegistry = {}
        this._oneTransactionWatcher = {}
    }
    TransferProvider2.prototype.fetchInfo = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, badResponse, _a, error, message, text, rawInfo, info
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        return [4, fetch(this.transferServer + '/info?lang=' + this.lang)]
                    case 1:
                        response = _b.sent()
                        if (!!response.ok) return [3, 3]
                        return [4, response.text()]
                    case 2:
                        badResponse = _b.sent()
                        try {
                            ;(_a = JSON.parse(badResponse)),
                                (error = _a.error),
                                (message = _a.message)
                            throw new Error(
                                'Error fetching info from ' +
                                    this.transferServer +
                                    ': error ' +
                                    (error || message)
                            )
                        } catch (e) {
                            throw new Error(
                                'Error fetching info from ' +
                                    this.transferServer +
                                    ': error \n          code ' +
                                    response.status +
                                    ', response text: "' +
                                    badResponse +
                                    '"'
                            )
                        }
                        _b.label = 3
                    case 3:
                        return [4, response.text()]
                    case 4:
                        text = _b.sent()
                        try {
                            rawInfo = JSON.parse(text)
                            info = parseInfo(rawInfo)
                            this.info = info
                            return [2, info]
                        } catch (e) {
                            throw new Error(
                                'Error parsing the response of ' +
                                    this.transferServer +
                                    '/info as JSON: ' +
                                    text
                            )
                        }
                        return [2]
                }
            })
        })
    }
    TransferProvider2.prototype.getHeaders = function (headers) {
        if (headers === void 0) {
            headers = {}
        }
        if (headers.Authorization && this.authToken) {
            throw new Error(
                'You passed an `Authorization` header that will get wiped out by SEP-10 auth'
            )
        }
        return new Headers(
            this.authToken
                ? tslib_1.__assign({}, headers, { Authorization: 'Bearer ' + this.authToken })
                : headers
        )
    }
    TransferProvider2.prototype.setAuthToken = function (token) {
        this.authToken = token
    }
    TransferProvider2.prototype.fetchTransactions = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isAuthRequired, kind, response, badResponse, _a, error, message, text, transactions
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        isAuthRequired = this.getAuthStatus('fetchTransactions', params.asset_code)
                        if (!params.show_all_transactions) {
                            kind =
                                params.kind ||
                                (this.operation === 'deposit' ? 'deposit' : 'withdrawal')
                        }
                        return [
                            4,
                            fetch(
                                this.transferServer +
                                    '/transactions?' +
                                    queryString.stringify(tslib_1.__assign({}, params, { kind })),
                                {
                                    headers: isAuthRequired ? this.getHeaders() : void 0,
                                }
                            ),
                        ]
                    case 1:
                        response = _b.sent()
                        if (!!response.ok) return [3, 3]
                        return [4, response.text()]
                    case 2:
                        badResponse = _b.sent()
                        try {
                            ;(_a = JSON.parse(badResponse)),
                                (error = _a.error),
                                (message = _a.message)
                            throw new Error(
                                'Error fetching transactions from ' +
                                    this.transferServer +
                                    ': error ' +
                                    (error || message)
                            )
                        } catch (e) {
                            throw new Error(
                                'Error fetching transactions from ' +
                                    this.transferServer +
                                    ': error \n          code ' +
                                    response.status +
                                    ', response text: "' +
                                    badResponse +
                                    '"'
                            )
                        }
                        _b.label = 3
                    case 3:
                        return [4, response.text()]
                    case 4:
                        text = _b.sent()
                        try {
                            transactions = JSON.parse(text).transactions
                            return [2, transactions.map(_normalizeTransaction)]
                        } catch (e) {
                            throw new Error(
                                'Invalid transaction response from ' +
                                    this.transferServer +
                                    ': ' +
                                    text
                            )
                        }
                        return [2]
                }
            })
        })
    }
    TransferProvider2.prototype.fetchTransaction = function (params, isWatching) {
        if (isWatching === void 0) {
            isWatching = false
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var asset_code,
                id,
                stellar_transaction_id,
                external_transaction_id,
                lang,
                isAuthRequired,
                qs,
                response,
                badResponse,
                _a,
                error,
                message,
                text,
                transaction
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ;(asset_code = params.asset_code),
                            (id = params.id),
                            (stellar_transaction_id = params.stellar_transaction_id),
                            (external_transaction_id = params.external_transaction_id),
                            (lang = params.lang)
                        if (
                            id === void 0 &&
                            stellar_transaction_id === void 0 &&
                            external_transaction_id === void 0
                        ) {
                            throw new Error(
                                'fetchTransaction: One of `id`, `external_transaction_id`, or `stellar_transaction_id` must be provided! '
                            )
                        }
                        isAuthRequired = this.getAuthStatus(
                            isWatching ? 'watchOneTransaction' : 'fetchTransaction',
                            asset_code
                        )
                        qs = {}
                        if (id) {
                            qs = { id }
                        } else if (stellar_transaction_id) {
                            qs = { stellar_transaction_id }
                        } else if (external_transaction_id) {
                            qs = { external_transaction_id }
                        }
                        if (lang) {
                            qs = tslib_1.__assign({ lang }, qs)
                        }
                        return [
                            4,
                            fetch(
                                this.transferServer + '/transaction?' + queryString.stringify(qs),
                                {
                                    headers: isAuthRequired ? this.getHeaders() : void 0,
                                }
                            ),
                        ]
                    case 1:
                        response = _b.sent()
                        if (!!response.ok) return [3, 3]
                        return [4, response.text()]
                    case 2:
                        badResponse = _b.sent()
                        try {
                            ;(_a = JSON.parse(badResponse)),
                                (error = _a.error),
                                (message = _a.message)
                            throw new Error(
                                'Error fetching transaction ' +
                                    qs +
                                    ' from ' +
                                    this.transferServer +
                                    ': error ' +
                                    (error || message)
                            )
                        } catch (e) {
                            throw new Error(
                                'Error fetching transaction ' +
                                    qs +
                                    ' from ' +
                                    this.transferServer +
                                    ': error \n          code ' +
                                    response.status +
                                    ', response text: "' +
                                    badResponse +
                                    '"'
                            )
                        }
                        _b.label = 3
                    case 3:
                        return [4, response.text()]
                    case 4:
                        text = _b.sent()
                        try {
                            transaction = JSON.parse(text).transaction
                            return [2, _normalizeTransaction(transaction)]
                        } catch (e) {
                            throw new Error("Fetch transaction response wasn't valid JSON: " + text)
                        }
                        return [2]
                }
            })
        })
    }
    TransferProvider2.prototype.watchAllTransactions = function (params) {
        var _this = this
        var _a
        var asset_code = params.asset_code,
            onMessage = params.onMessage,
            onError = params.onError,
            _b = params.watchlist,
            watchlist = _b === void 0 ? [] : _b,
            _c = params.timeout,
            timeout = _c === void 0 ? 5e3 : _c,
            _d = params.isRetry,
            isRetry = _d === void 0 ? false : _d,
            otherParams = tslib_1.__rest(params, [
                'asset_code',
                'onMessage',
                'onError',
                'watchlist',
                'timeout',
                'isRetry',
            ])
        var watchlistMap = watchlist.reduce(function (memo, id) {
            var _a2
            return tslib_1.__assign({}, memo, ((_a2 = {}), (_a2[id] = true), _a2))
        }, {})
        if (!isRetry) {
            this._watchAllTransactionsRegistry = tslib_1.__assign(
                {},
                this._watchAllTransactionsRegistry,
                ((_a = {}), (_a[asset_code] = true), _a)
            )
        }
        this.fetchTransactions(tslib_1.__assign({ asset_code }, otherParams || {}))
            .then(function (transactions) {
                if (!_this._watchAllTransactionsRegistry[asset_code]) {
                    return
                }
                try {
                    var newTransactions = transactions.filter(function (transaction) {
                        var isPending =
                            transaction.status.indexOf('pending') === 0 ||
                            transaction.status === TransactionStatus.incomplete
                        var registeredTransaction =
                            _this._transactionsRegistry[asset_code][transaction.id]
                        if (!isRetry) {
                            if (watchlistMap[transaction.id]) {
                                return true
                            }
                            if (!isPending) {
                                _this._transactionsIgnoredRegistry[asset_code][transaction.id] =
                                    transaction
                            }
                            return isPending
                        }
                        if (registeredTransaction) {
                            return !isEqual(registeredTransaction, transaction)
                        }
                        if (
                            [
                                TransactionStatus.completed,
                                TransactionStatus.refunded,
                                TransactionStatus.error,
                            ].includes(transaction.status) &&
                            isRetry &&
                            !_this._transactionsIgnoredRegistry[asset_code][transaction.id]
                        ) {
                            return true
                        }
                        if (isPending) {
                            return true
                        }
                        return false
                    })
                    newTransactions.forEach(function (transaction) {
                        _this._transactionsRegistry[asset_code][transaction.id] = transaction
                        if (transaction.status === TransactionStatus.error) {
                            onError(transaction)
                        } else {
                            onMessage(transaction)
                        }
                    })
                } catch (e) {
                    onError(e)
                    return
                }
                if (_this._allTransactionsWatcher) {
                    clearTimeout(_this._allTransactionsWatcher)
                }
                _this._allTransactionsWatcher = setTimeout(function () {
                    _this.watchAllTransactions(
                        tslib_1.__assign(
                            {
                                asset_code,
                                onMessage,
                                onError,
                                timeout,
                                isRetry: true,
                            },
                            otherParams || {}
                        )
                    )
                }, timeout)
            })
            .catch(function (e) {
                onError(e)
            })
        return {
            refresh: function () {
                if (!_this._watchAllTransactionsRegistry[asset_code]) {
                    return
                }
                if (_this._allTransactionsWatcher) {
                    clearTimeout(_this._allTransactionsWatcher)
                }
                _this.watchAllTransactions(
                    tslib_1.__assign(
                        {
                            asset_code,
                            onMessage,
                            onError,
                            timeout,
                            isRetry: true,
                        },
                        otherParams || {}
                    )
                )
            },
            stop: function () {
                if (_this._allTransactionsWatcher) {
                    _this._watchAllTransactionsRegistry[asset_code] = false
                    _this._transactionsRegistry[asset_code] = {}
                    _this._transactionsIgnoredRegistry[asset_code] = {}
                    clearTimeout(_this._allTransactionsWatcher)
                }
            },
        }
    }
    TransferProvider2.prototype.watchOneTransaction = function (params) {
        var _this = this
        var _a, _b
        var asset_code = params.asset_code,
            id = params.id,
            external_transaction_id = params.external_transaction_id,
            stellar_transaction_id = params.stellar_transaction_id,
            onMessage = params.onMessage,
            onSuccess = params.onSuccess,
            onError = params.onError,
            _c = params.timeout,
            timeout = _c === void 0 ? 5e3 : _c,
            _d = params.isRetry,
            isRetry = _d === void 0 ? false : _d,
            otherParams = tslib_1.__rest(params, [
                'asset_code',
                'id',
                'external_transaction_id',
                'stellar_transaction_id',
                'onMessage',
                'onSuccess',
                'onError',
                'timeout',
                'isRetry',
            ])
        var txId = id || external_transaction_id || stellar_transaction_id
        if (txId === void 0) {
            throw new Error(
                'fetchTransaction: One of `id`, `external_transaction_id`, or `stellar_transaction_id` must be provided! '
            )
        }
        if (!isRetry) {
            this._watchOneTransactionRegistry = tslib_1.__assign(
                {},
                this._watchOneTransactionRegistry,
                ((_a = {}),
                (_a[asset_code] = tslib_1.__assign(
                    {},
                    this._watchOneTransactionRegistry[asset_code] || {},
                    ((_b = {}), (_b[txId] = true), _b)
                )),
                _a)
            )
        }
        this.fetchTransaction(tslib_1.__assign({ asset_code, id }, otherParams || {}), true)
            .then(function (transaction) {
                if (
                    !(
                        _this._watchOneTransactionRegistry[asset_code] &&
                        _this._watchOneTransactionRegistry[asset_code][txId]
                    )
                ) {
                    return
                }
                var registeredTransaction = _this._transactionsRegistry[asset_code][transaction.id]
                if (registeredTransaction && isEqual(registeredTransaction, transaction)) {
                    return
                }
                _this._transactionsRegistry[asset_code][transaction.id] = transaction
                if (transaction.status.indexOf('pending') === 0) {
                    if (_this._oneTransactionWatcher[txId]) {
                        clearTimeout(_this._oneTransactionWatcher[txId])
                    }
                    _this._oneTransactionWatcher[txId] = setTimeout(function () {
                        _this.watchOneTransaction(
                            tslib_1.__assign(
                                {
                                    asset_code,
                                    id,
                                    external_transaction_id,
                                    stellar_transaction_id,
                                    onMessage,
                                    onSuccess,
                                    onError,
                                    timeout,
                                    isRetry: true,
                                },
                                otherParams || {}
                            )
                        )
                    }, timeout)
                    onMessage(transaction)
                } else if (
                    [TransactionStatus.completed, TransactionStatus.refunded].includes(
                        transaction.status
                    )
                ) {
                    onSuccess(transaction)
                } else {
                    onError(transaction)
                }
            })
            .catch(function (e) {
                onError(e)
            })
        return {
            refresh: function () {
                if (
                    !(
                        _this._watchOneTransactionRegistry[asset_code] &&
                        _this._watchOneTransactionRegistry[asset_code][txId]
                    )
                ) {
                    return
                }
                if (_this._oneTransactionWatcher[txId]) {
                    clearTimeout(_this._oneTransactionWatcher[txId])
                }
                _this.watchOneTransaction(
                    tslib_1.__assign(
                        {
                            asset_code,
                            id,
                            external_transaction_id,
                            stellar_transaction_id,
                            onMessage,
                            onSuccess,
                            onError,
                            timeout,
                            isRetry: true,
                        },
                        otherParams || {}
                    )
                )
            },
            stop: function () {
                if (_this._oneTransactionWatcher[txId]) {
                    _this._watchOneTransactionRegistry[asset_code][txId] = false
                    clearTimeout(_this._oneTransactionWatcher[txId])
                }
            },
        }
    }
    TransferProvider2.prototype.fetchFinalFee = function (params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var assetInfo,
                fee,
                _a,
                simpleFee,
                response,
                badResponse,
                _b,
                error,
                message,
                text,
                feeResponse
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.info || !this.info[this.operation]) {
                            throw new Error(
                                'Run fetchSupportedAssets before running fetchFinalFee!'
                            )
                        }
                        assetInfo = this.info[this.operation][params.asset_code]
                        if (!assetInfo) {
                            throw new Error(
                                "Can't get fee for an unsupported asset, '" + params.asset_code
                            )
                        }
                        fee = assetInfo.fee
                        _a = fee.type
                        switch (_a) {
                            case 'none':
                                return [3, 1]
                            case 'simple':
                                return [3, 2]
                            case 'complex':
                                return [3, 3]
                        }
                        return [3, 8]
                    case 1:
                        return [2, 0]
                    case 2:
                        simpleFee = fee
                        return [
                            2,
                            ((simpleFee.percent || 0) / 100) * Number(params.amount) +
                                (simpleFee.fixed || 0),
                        ]
                    case 3:
                        return [
                            4,
                            fetch(
                                this.transferServer +
                                    '/fee?' +
                                    queryString.stringify(
                                        tslib_1.__assign({}, params, fee, {
                                            operation: this.operation,
                                        })
                                    )
                            ),
                        ]
                    case 4:
                        response = _c.sent()
                        if (!!response.ok) return [3, 6]
                        return [4, response.text()]
                    case 5:
                        badResponse = _c.sent()
                        try {
                            ;(_b = JSON.parse(badResponse)),
                                (error = _b.error),
                                (message = _b.message)
                            throw new Error(
                                'Error fetching fees from ' +
                                    this.transferServer +
                                    ': error ' +
                                    (error || message)
                            )
                        } catch (e) {
                            throw new Error(
                                'Error fetching fees from ' +
                                    this.transferServer +
                                    ': error \n              code ' +
                                    response.status +
                                    ', response text: "' +
                                    badResponse +
                                    '"'
                            )
                        }
                        _c.label = 6
                    case 6:
                        return [4, response.text()]
                    case 7:
                        text = _c.sent()
                        try {
                            feeResponse = JSON.parse(text).fee
                            return [2, feeResponse]
                        } catch (e) {
                            throw new Error('Fee endpoint returned invalid JSON: ' + text)
                        }
                        _c.label = 8
                    case 8:
                        throw new Error(
                            "Invalid fee type found! Got '" +
                                fee.type +
                                "' but expected one of 'none', 'simple', 'complex'"
                        )
                }
            })
        })
    }
    TransferProvider2.prototype.getAuthStatus = function (functionName, asset_code) {
        if (!asset_code) {
            throw new Error('Required parameter `asset_code` not provided!')
        }
        if (!this.info || !this.info[this.operation]) {
            throw new Error('Run fetchSupportedAssets before running ' + functionName + '!')
        }
        var assetInfo = this.info[this.operation][asset_code]
        if (!assetInfo) {
            throw new Error('Asset ' + asset_code + ' is not supported by ' + this.transferServer)
        }
        if (!this.authToken) {
            throw new Error(
                '\n        Asset ' +
                    asset_code +
                    " requires authentication. Run KeyManager's \n        fetchAuthToken function, then run setAuthToken to set it.\n        "
            )
        }
        return true
    }
    return TransferProvider2
})()
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
function validateEmail(email) {
    return !!email.match(emailRegex)
}
;(function (_super) {
    tslib_1.__extends(DepositProvider, _super)
    function DepositProvider(transferServer, account, lang) {
        if (lang === void 0) {
            lang = 'en'
        }
        return _super.call(this, transferServer, account, lang, 'deposit') || this
    }
    DepositProvider.prototype.startDeposit = function (params, shouldUseNewEndpoints, headers) {
        if (shouldUseNewEndpoints === void 0) {
            shouldUseNewEndpoints = false
        }
        if (headers === void 0) {
            headers = {}
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var request,
                isAuthRequired,
                response,
                json,
                body_1,
                qs,
                isAnchorUSDSep6,
                responseText,
                error,
                text,
                error,
                _a,
                origin_1,
                pathname,
                search,
                hash
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        request = tslib_1.__assign({}, params, {
                            account: this.account,
                            lang: this.lang,
                        })
                        isAuthRequired = this.getAuthStatus('deposit', params.asset_code)
                        if (!shouldUseNewEndpoints) return [3, 2]
                        body_1 = new FormData()
                        Object.keys(request).forEach(function (key) {
                            body_1.append(key, request[key])
                        })
                        return [
                            4,
                            fetch(this.transferServer + '/transactions/deposit/interactive', {
                                method: 'POST',
                                body: body_1,
                                headers: isAuthRequired ? this.getHeaders(headers) : void 0,
                            }),
                        ]
                    case 1:
                        response = _b.sent()
                        return [3, 4]
                    case 2:
                        qs = queryString.stringify(request)
                        return [
                            4,
                            fetch(this.transferServer + '/deposit?' + qs, {
                                headers: isAuthRequired ? this.getHeaders(headers) : void 0,
                            }),
                        ]
                    case 3:
                        response = _b.sent()
                        _b.label = 4
                    case 4:
                        isAnchorUSDSep6 =
                            !shouldUseNewEndpoints && this.transferServer.includes('anchorusd.com')
                        if (!(!response.ok && !isAnchorUSDSep6)) return [3, 6]
                        return [4, response.text()]
                    case 5:
                        responseText = _b.sent()
                        try {
                            error = JSON.parse(responseText).error
                            throw new Error(
                                'Error starting deposit to ' +
                                    this.transferServer +
                                    ': error ' +
                                    error
                            )
                        } catch (e) {
                            throw new Error(
                                'Error starting deposit to ' +
                                    this.transferServer +
                                    ': error \n          code ' +
                                    response.status +
                                    ', status text: "' +
                                    responseText +
                                    '"'
                            )
                        }
                        _b.label = 6
                    case 6:
                        return [4, response.text()]
                    case 7:
                        text = _b.sent()
                        try {
                            json = JSON.parse(text)
                        } catch (e) {
                            throw new Error('Error parsing the deposit response as JSON: ' + text)
                        }
                        if (json.error) {
                            error = new Error(
                                typeof json.error === 'string'
                                    ? json.error
                                    : JSON.stringify(json.error)
                            )
                            error.originalResponse = json
                            throw error
                        }
                        if (
                            isAuthRequired &&
                            json.type === TransferResponseType.interactive_customer_info_needed &&
                            json.url &&
                            json.url.indexOf('jwt') === -1
                        ) {
                            ;(_a = new URL(json.url)),
                                (origin_1 = _a.origin),
                                (pathname = _a.pathname),
                                (search = _a.search),
                                (hash = _a.hash)
                            json.url =
                                '' +
                                origin_1 +
                                pathname +
                                search +
                                (search ? '&' : '?') +
                                'jwt=' +
                                this.authToken +
                                hash
                        }
                        this.request = request
                        this.response = json
                        return [2, json]
                }
            })
        })
    }
    DepositProvider.prototype.fetchSupportedAssets = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var deposit
            var _this = this
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, this.fetchInfo()]
                    case 1:
                        deposit = _a.sent().deposit
                        Object.keys(deposit).forEach(function (code) {
                            _this._watchOneTransactionRegistry[code] =
                                _this._watchOneTransactionRegistry[code] || {}
                            _this._watchAllTransactionsRegistry[code] = false
                            _this._transactionsRegistry[code] =
                                _this._transactionsRegistry[code] || {}
                            _this._transactionsIgnoredRegistry[code] =
                                _this._transactionsIgnoredRegistry[code] || {}
                        })
                        return [2, deposit]
                }
            })
        })
    }
    DepositProvider.prototype.getAssetInfo = function (asset_code) {
        if (!this.info || !this.info[this.operation]) {
            throw new Error('Run fetchSupportedAssets before running getAssetInfo!')
        }
        if (!this.info[this.operation][asset_code]) {
            throw new Error('Asset not supported: ' + asset_code)
        }
        return this.info[this.operation][asset_code]
    }
    DepositProvider.prototype.fetchKycInBrowser = function (windowContext) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var kycResult
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.response || !this.request) {
                            throw new Error('Run startDeposit before calling fetchKycInBrowser!')
                        }
                        if (
                            this.response.type !==
                                TransferResponseType.interactive_customer_info_needed ||
                            !this.response.url
                        ) {
                            throw new Error('KYC not needed for this deposit!')
                        }
                        return [
                            4,
                            fetchKycInBrowser({
                                response: this.response,
                                request: this.request,
                                window: windowContext,
                            }),
                        ]
                    case 1:
                        kycResult = _a.sent()
                        if (kycResult.type === TransferResponseType.customer_info_status) {
                            switch (kycResult.status) {
                                case 'denied':
                                    return [2, Promise.reject(kycResult)]
                                case 'pending':
                                    return [2, Promise.reject(kycResult)]
                                case 'success':
                                    return [2, Promise.resolve(kycResult)]
                                default:
                                    throw new Error(
                                        "Invalid KYC response received: '" + kycResult.status + "'."
                                    )
                            }
                        }
                        if (kycResult.status === TransactionStatus.completed) {
                            return [2, Promise.resolve(kycResult)]
                        }
                        return [2, Promise.reject(kycResult)]
                }
            })
        })
    }
    DepositProvider.prototype.getKycUrl = function (callback_url) {
        if (!this.response || !this.request) {
            throw new Error('Run startDeposit before calling getKycUrl!')
        }
        if (
            this.response.type !== TransferResponseType.interactive_customer_info_needed ||
            !this.response.url
        ) {
            throw new Error('KYC not needed for this deposit!')
        }
        return getKycUrl({
            response: this.response,
            request: this.request,
            callback_url,
        })
    }
    DepositProvider.prototype.validateFields = function (asset_code, payload) {
        if (!this.info || !this.info[this.operation]) {
            throw new Error('Run fetchSupportedAssets before running fetchFinalFee!')
        }
        var assetInfo = this.info[this.operation][asset_code]
        if (!assetInfo) {
            throw new Error("Can't get fee for an unsupported asset, '" + asset_code)
        }
        var fields = assetInfo.fields || []
        return fields.reduce(function (isValid, field) {
            if (!isValid) {
                return isValid
            }
            if (field.optional) {
                return isValid
            }
            var response = payload[field.name]
            if (!response) {
                return false
            }
            if (field.choices) {
                var choiceMap = field.choices.reduce(function (memo, choice) {
                    var _a
                    return tslib_1.__assign({}, memo, ((_a = {}), (_a[choice] = true), _a))
                }, {})
                if (!choiceMap[response]) {
                    return false
                }
            }
            if (
                field.name === 'email' ||
                (field.name === 'email_address' && !validateEmail(response))
            ) {
                return false
            }
            if (field.name === 'amount' && isNaN(parseFloat(response))) {
                return false
            }
            return isValid
        }, true)
    }
    return DepositProvider
})(TransferProvider)
;(function (_super) {
    tslib_1.__extends(WithdrawProvider, _super)
    function WithdrawProvider(transferServer, account, lang) {
        if (lang === void 0) {
            lang = 'en'
        }
        return _super.call(this, transferServer, account, lang, 'withdraw') || this
    }
    WithdrawProvider.prototype.startWithdraw = function (params, shouldUseNewEndpoints, headers) {
        if (shouldUseNewEndpoints === void 0) {
            shouldUseNewEndpoints = false
        }
        if (headers === void 0) {
            headers = {}
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var request,
                isAuthRequired,
                response,
                json,
                body_1,
                qs,
                isAnchorUSDSep6,
                responseText,
                error,
                text,
                error,
                _a,
                origin_1,
                pathname,
                search,
                hash
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        request = tslib_1.__assign({}, params, {
                            account: this.account,
                            lang: this.lang,
                        })
                        isAuthRequired = this.getAuthStatus('withdraw', params.asset_code)
                        if (!shouldUseNewEndpoints) return [3, 2]
                        body_1 = new FormData()
                        Object.keys(request).forEach(function (key) {
                            body_1.append(key, request[key])
                        })
                        return [
                            4,
                            fetch(this.transferServer + '/transactions/withdraw/interactive', {
                                method: 'POST',
                                body: body_1,
                                headers: isAuthRequired ? this.getHeaders(headers) : void 0,
                            }),
                        ]
                    case 1:
                        response = _b.sent()
                        return [3, 4]
                    case 2:
                        qs = queryString.stringify(request)
                        return [
                            4,
                            fetch(this.transferServer + '/withdraw?' + qs, {
                                headers: isAuthRequired ? this.getHeaders(headers) : void 0,
                            }),
                        ]
                    case 3:
                        response = _b.sent()
                        _b.label = 4
                    case 4:
                        isAnchorUSDSep6 =
                            !shouldUseNewEndpoints && this.transferServer.includes('anchorusd.com')
                        if (!(!response.ok && !isAnchorUSDSep6)) return [3, 6]
                        return [4, response.text()]
                    case 5:
                        responseText = _b.sent()
                        try {
                            error = JSON.parse(responseText).error
                            throw new Error(
                                'Error starting withdrawal to ' +
                                    this.transferServer +
                                    ': error ' +
                                    error
                            )
                        } catch (e) {
                            throw new Error(
                                'Error starting withdrawal to ' +
                                    this.transferServer +
                                    ': error \n          code ' +
                                    response.status +
                                    ', status text: "' +
                                    responseText +
                                    '"'
                            )
                        }
                        _b.label = 6
                    case 6:
                        return [4, response.text()]
                    case 7:
                        text = _b.sent()
                        try {
                            json = JSON.parse(text)
                        } catch (e) {
                            throw new Error('Error parsing the deposit response as JSON: ' + text)
                        }
                        if (json.error) {
                            error = new Error(json.error)
                            error.originalResponse = json
                            throw error
                        }
                        if (
                            isAuthRequired &&
                            json.type === TransferResponseType.interactive_customer_info_needed &&
                            json.url &&
                            json.url.indexOf('jwt') === -1
                        ) {
                            ;(_a = new URL(json.url)),
                                (origin_1 = _a.origin),
                                (pathname = _a.pathname),
                                (search = _a.search),
                                (hash = _a.hash)
                            json.url =
                                '' +
                                origin_1 +
                                pathname +
                                search +
                                (search ? '&' : '?') +
                                'jwt=' +
                                this.authToken +
                                hash
                        }
                        this.request = request
                        this.response = json
                        return [2, json]
                }
            })
        })
    }
    WithdrawProvider.prototype.fetchSupportedAssets = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var withdraw
            var _this = this
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, this.fetchInfo()]
                    case 1:
                        withdraw = _a.sent().withdraw
                        Object.keys(withdraw).forEach(function (code) {
                            _this._watchOneTransactionRegistry[code] =
                                _this._watchOneTransactionRegistry[code] || {}
                            _this._watchAllTransactionsRegistry[code] = false
                            _this._transactionsRegistry[code] =
                                _this._transactionsRegistry[code] || {}
                            _this._transactionsIgnoredRegistry[code] =
                                _this._transactionsIgnoredRegistry[code] || {}
                        })
                        return [2, withdraw]
                }
            })
        })
    }
    WithdrawProvider.prototype.getAssetInfo = function (asset_code) {
        if (!this.info || !this.info[this.operation]) {
            throw new Error('Run fetchSupportedAssets before running getAssetInfo!')
        }
        if (!this.info[this.operation][asset_code]) {
            throw new Error('Asset not supported: ' + asset_code)
        }
        return this.info[this.operation][asset_code]
    }
    WithdrawProvider.prototype.fetchKycInBrowser = function (windowContext) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var kycResult
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.response || !this.request) {
                            throw new Error('Run startWithdraw before calling fetchKycInBrowser!')
                        }
                        if (
                            this.response.type !==
                                TransferResponseType.interactive_customer_info_needed ||
                            !this.response.url
                        ) {
                            throw new Error('KYC not needed for this withdrawal!')
                        }
                        return [
                            4,
                            fetchKycInBrowser({
                                response: this.response,
                                request: this.request,
                                window: windowContext,
                            }),
                        ]
                    case 1:
                        kycResult = _a.sent()
                        if (kycResult.type === TransferResponseType.customer_info_status) {
                            switch (kycResult.status) {
                                case 'denied':
                                    return [2, Promise.reject(kycResult)]
                                case 'pending':
                                    return [2, Promise.reject(kycResult)]
                                case 'success':
                                    return [2, Promise.resolve(kycResult)]
                                default:
                                    throw new Error(
                                        "Invalid KYC response received: '" + kycResult.status + "'."
                                    )
                            }
                        }
                        if (kycResult.status === TransactionStatus.completed) {
                            return [2, Promise.resolve(kycResult)]
                        }
                        return [2, Promise.reject(kycResult)]
                }
            })
        })
    }
    WithdrawProvider.prototype.getKycUrl = function (callback_url) {
        if (!this.response || !this.request) {
            throw new Error('Run startWithdraw before calling getKycUrl!')
        }
        if (
            this.response.type !== TransferResponseType.interactive_customer_info_needed ||
            !this.response.url
        ) {
            throw new Error('KYC not needed for this withdrawal!')
        }
        return getKycUrl({
            response: this.response,
            request: this.request,
            callback_url,
        })
    }
    return WithdrawProvider
})(TransferProvider)
