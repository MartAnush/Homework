function call (details){
    if(typeof details === 'number'){
        this.isCalling = true;
        this.callingNumber = details;
        this.callHistory.push(details)
    } else {
        let c = null
        for(let i = 0; i < this.contacts.length; i++){
            if(this.contacts[i].name === details){
                c = this.contacts[i]
                break
            }
        }
        if(c){
            this.isCalling = true;
            this.callingNumber = c.name;
            this.callHistory.push(c.name)
        }
    }
}
function stopCall(){
    if(!this.isCalling ){
        console.log('Something went wrong')
        return
    } else{
        this.isCalling = false
        if(typeof this.callingNumber === 'number'){
            const shouldAddToContacts = confirm('????')
            if(shouldAddToContacts){
                const name = prompt('Please type name')
                this.addContact(name, this.callingNumber)
            }
        }
        this.callingNumber = null
    }
};
function getCallHistory (){
    return this.callHistory
}
function addContact (name,number){
    let contact = {
        name,
        number
    }
    this.contacts.push(contact);
}
function deleteContact (name){
    let newContacts = [];
    for(let i = 0; i < this.contacts.length; i++){
        if(this.contacts[i].name !== name){
          newContacts.push(this.contacts[i])
        }
    }
    this.contacts = newContacts;
}
function Phone (model, color,size){
    //this = {}
    this.model = model;
    this.color = color;
    this.size = size;
    this.year = 2022;
    this.callHistory = [];
    this.contacts = [];
    this.call = call
    this.stopCall = stopCall
    this.getCallHistory = getCallHistory
    this.addContact = addContact
    this.deleteContact = deleteContact
    //return this
}