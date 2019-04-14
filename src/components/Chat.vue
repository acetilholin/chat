<template>
    <div class="chat container">
        <h3 class="center teal-text">Chat</h3>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text name-size">{{ message.name }}:</span>
                        <span class="grey-text text-darken-3 content-size">{{ message.content }}</span>
                        <span class="grey-text time timestamp-size">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <new-message :name="name"></new-message>
            </div>
        </div>
    </div>
</template>

<script>
    import NewMessage from '@/components/NewMessage'
    import db from '@/firebase/init'
    import moment from 'moment'

    export default {
        name: "Chat",
        props: ['name'],
        components: {
            NewMessage
        },
        data(){
            return {
                messages: []
            }
        },
        created(){
            let ref = db.collection('messages').orderBy('timestamp');
            ref.onSnapshot(snapshot => {
               snapshot.docChanges().forEach( change => {
                   if (change.type === 'added'){
                        let doc = change.doc;
                       this.messages.push({
                           id: doc.id,
                           name: doc.data().name,
                           content: doc.data().content,
                           timestamp: moment(doc.data().timestamp).format('lll')
                       })
                   }
               })
            })
        }
    }
</script>

<style scoped>
   .chat {
       font-size: 2em;
       margin-bottom: 40px;
   }
    .chat span {
        font-size: 1em;
    }
    .chat .time {
        display: block;
        font-size: 1em;
    }
    .name-size {
        font-size: 18px !important;
    }
    .content-size{
        font-size: 17px !important;
        font-style: italic;
    }
    .timestamp-size {
        font-size: 11px !important;
    }
    .messages {
        max-height: 300px;
        overflow: auto;
    }
    .messages::-webkit-scrollbar {
        width: 3px;
    }
   .messages::-webkit-scrollbar-track {
       background-color: #ddd;
   }
   .messages::-webkit-scrollbar-thumb {
       background: #aaa;
   }
</style>