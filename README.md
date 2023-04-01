# Demo

https://user-images.githubusercontent.com/17527962/229257246-defc8b03-4191-4569-9a25-e4c62c1a3994.mp4

# Prerequisite

1. Install Node.js (https://nodejs.org/en/download/);
2. Run `npm install` in this folder;
3. Replace values in order-wishlist.js with yours (credentials + credit card);
4. Ensure your cart is empty before scheduling this program, it will order everything in it;
5. Ensure your favorite store, billing address & shipping address is configured in your account;
6. Test the program before scheduling it, because you will need to allow this program in your firewall;
7. Happy drinking, cheers!

All urls have been tested with French only, so ensure you use a wishlist url in French.

# Start the program

    .\order-wishlist.cmd

To allow it once towards your firewall. You must have Chrome installed to use it.

# Schedule it

Run schedule.cmd as an administrator to schedule it once. You can change the time in the file, but it is scheduled by default to
run at midnight to give you a chance to obtain exlcusive products released at midnight before they are sold out.

# Schedule it periodically

Just play with the schedule.cmd. See documentation on how to trigger periodically:
https://learn.microsoft.com/en-us/windows/win32/taskschd/schtasks.

You can also see the task ("order-wishlist-task") in the Task Scheduler Windows program:
1. Touch Windows Key and type "Task Scheduler"
2. Open it in administrator
3. You should see your task there
