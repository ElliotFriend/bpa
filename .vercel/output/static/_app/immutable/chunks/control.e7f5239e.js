let e = class {
        constructor(s, t) {
            ;(this.status = s),
                typeof t == 'string'
                    ? (this.body = { message: t })
                    : t
                    ? (this.body = t)
                    : (this.body = { message: `Error: ${s}` })
        }
        toString() {
            return JSON.stringify(this.body)
        }
    },
    o = class {
        constructor(s, t) {
            ;(this.status = s), (this.location = t)
        }
    }
export { e as H, o as R }
