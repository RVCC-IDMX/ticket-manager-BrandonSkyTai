# Ticket Manager

The Ticket Manager allows consumers to purchase a specified quantity of tickets. Once the tickets are sold out, further purchases are prevented by the App. Listeners provide real-time feedback to the console, while event emitters generate events for buy and error actions. Additionally, a database and email services simulate saving data to a database and sending an email to the consumer.

# Usage Instructions:

    To purchase tickets, use the code "ticketManager.buy(email, price);" by providing the email of the buyer and the price they are paying. This will generate a response from all listeners that have the 'buy' identifying string, including the database and email services.

    Create a listener that executes code in its callback function when an emit event occurs under the matching identifying string, using the code "ticketManager.on(string, () => {});".
    To determine the number of listeners associated with a specific identifying string, use the code "ticketManager.listenerCount(string);".

    To remove a listener from the event emitter, use the code "ticketManager.off(string, variable);" by providing an identifying string for the listener and a variable containing the corresponding callback function.

    To remove all listeners associated with a specific identifying string from the event emitter, use the code "ticketManager.removeAllListeners(string);".