export async function previewTransaction({ form, data, action, cancel, submitter }) {
    return async ({ result, update }) => {
        // do something with the result
        update()
    }
}
