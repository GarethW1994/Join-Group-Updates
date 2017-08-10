const log = console.log;
$(document).ready(function(){
    var date = new Date;
    //user object
    const User = {
        user_name: '', 
        messages: [],
        date: ""
    }
    
    
    $('#add_user').on('click', function(){
        let name = $('#new_user').val();
        
        let new_user = User;
        
        new_user.user_name = name;
        
        $.gritter.add({
                    position: 'bottom-left',
                    title: 'Notification!',
                    time: 9000,
                    text: new_user.user_name + " has just joined the chat"
                });
        
        $('#new_user').val("");
        });
    
    $('#send_message').on('click', function(){
        let msg = $('#message').val();
        
        let new_message = User;
        date = new Date;
        
        new_message.date = date.toLocaleTimeString();
        
        log(new_message.date);
        
        new_message.messages.push({msg});
        
        update_chat(new_message);   
        
        $('#message').val("");
    });
    
    log('document successfully loaded!');
})