# Prerequisite

1. Replace values in order-wishlist.js with yours (credentials + credit card);
2. Ensure your cart is empty before scheduling this program, it will order everything in it;
3. Ensure your favorite store, billing address & shipping address is configured in your account;
4. Test the program before scheduling it, because you will need to allow this program in your firewall;
5. Happy drinking, cheers!

All urls have been tested with French only, so ensure you use a wishlist url in french.

# Start the program

    .\order-wishlist.cmd

To allow it once towards your firewall.

# Schedule it

Run schedule.cmd as an administrator


# Schedule it periodically

Just play with the schedule.cmd. See documentation on how to trigger periodically:
https://learn.microsoft.com/en-us/windows/win32/taskschd/schtasks.

You can also see the task ("order-wishlist-task") in the Task Scheduler Windows program:
1. Touch Windows Key and type "Task Scheduler"
2. Open it in administrator
3. You should see your task there
