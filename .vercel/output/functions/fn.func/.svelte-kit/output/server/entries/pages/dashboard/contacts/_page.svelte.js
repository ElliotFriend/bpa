import {
    c as create_ssr_component,
    a as subscribe,
    d as add_attribute,
    b as each,
    e as escape,
} from '../../../../chunks/index3.js'
import { c as contacts } from '../../../../chunks/contactsStore.js'
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
    let newContact
    let $contacts, $$unsubscribe_contacts
    $$unsubscribe_contacts = subscribe(contacts, (value) => ($contacts = value))
    newContact = { name: '', address: '', favorite: false }
    $$unsubscribe_contacts()
    return `<div class="my-10 mx-20"><h1 class="text-5xl font-bold">Contacts</h1>
    <p>We&#39;ll manage our contacts here</p>

    ${``}

    <form><label for="name">name</label>
        <input id="name" name="name" type="text"${add_attribute('value', newContact.name, 0)}>
        <label for="address">address</label>
        <input id="address" name="address" type="text"${add_attribute(
            'value',
            newContact.address,
            0
        )}>
        <label for="favorite">favorite?
            <input type="checkbox" class="checkbox"${add_attribute(
                'checked',
                newContact.favorite,
                1
            )}></label>
        <button type="submit" class="btn btn-primary">add contact</button></form>


    <div class="overflow-x-auto"><h3>All Contacts</h3>
        <table class="table w-full"><thead><tr><th>Favorite</th>
                <th>Name</th>
                <th>Address</th>
                <th>Delete</th></tr></thead>
        ${
            $contacts
                ? `<tbody>${each($contacts, (contact) => {
                      return `<tr><th><div class="form-control"><label class="cursor-pointer label"><input type="checkbox" class="checkbox checkbox-success" ${
                          contact.favorite ? 'checked' : ''
                      }></label>
                    </div></th>
                <td><div class="flex items-center space-x-3"><div class="avatar"><div class="w-10 rounded-full"><img src="${
                    'https://id.lobstr.co/' + escape(contact.address, true) + '.png'
                }" alt="Avatar Tailwind CSS Component">
                        </div></div>
                        <div><div class="font-bold">${escape(contact.name)}</div></div>
                    </div></td>
                <td>${escape(contact.address)}</td>
                <th><button class="btn btn-square btn-error"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd"></path></svg>                          
                    </button></th>
            </tr>`
                  })}</tbody>`
                : ``
        }</table></div></div>`
})
export { Page as default }
