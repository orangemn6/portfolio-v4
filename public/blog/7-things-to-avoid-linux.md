
New-to-Linux users often ask for advice on what NOT to do in Linux. The number of really bad things you do in Linux? That number is legion! But I will share seven things that you really should not do in Linux unless you have a darn good reason.



1.
Do not install third-party programs or scripts unless you absolutely trust the source. This includes adding random PPAs, installing obscure programs in the AUR, downloading and exectuing scripts you find on GitHub or GitLab, etc. If it is not in one of your distro's core repositories, think long and hard before installing it. If you have some knowledge in terms of programming, looking at the source code of a 3rd party program or script before running it is stongly advised. There are a lot of malicious scripts out there. Many will wipe out your system. Others will do less-than-lethal thingsâ€¦like install hidden cryptominers on your system.



2.
Do not blindly copy and paste terminal commands you find on the Internet. If you do not fully understand the command you are entering, do not execute that command. Too many trolls post dangerous commands like rm/rf, dd'ing your drives, the bash fork bomb, etc. The great thing about these trolls spreading this stuff aroundâ€“it encourages people to actually learn a bit more about the command line. That way when you see these obviously dangerous commands, you won't fall it.



3.
Do not su or sudo without understanding why you need to have root privileges. To change anything on your system, like installing or removing software, enabling/disabling init services, deleting top-level directories, etc. you will have to have root privileges. This is done to protect you from doing something dumb. So if you are executing a command as su or sudo, ask yourselfâ€¦should I be doing this? If you don't have an answer to this question, then stop what you are doing.



4.
Never chmod to 777. For those not famiiliar with Linux file permissions, 777 gives the user, the group and everyone else the ability to read, write and execute that file. The part about giving everyone else (not the owner and group) the ability to write and execute a file is inherently dangerous. Surely, I don't to explain why. So never chmod to 777. And while we are on the subject of chmod.



5.
Never execute a command recursively (such as chmod) unless it's absolutely necessary. Executing a command recursively changes every file and subdirectory in the directory that you are currently in. Imagine doing this recursive command in / or ~ . Take chmod 777, which we just said you shouldn't do, but imagine doing this recursively on / . Congratulations. You just completely borked you system.



6.
Never play in directories outside of /home unless you know exactly what you doing. The other top level directories in the Linux filesystem, for the most part, are not areas that you want to play around in, outside of maybe the media, mnt, and tmp directories. But again, you probably won't be in those directories unless you have a good reason to be. Sometimes, it will be necessary to edit something in /usr or /etc. But be careful when you find yourself in these directories. And if you find yourself in the /boot or /root directories, just exit out of them before you hurt yourself.



7.
Don't worry if something breaks. Remember DT's First Law of Linuxâ€“Linux should hurt a little. If something breaks, stay calm. Read the wiki. Nine times out of ten, you will fix your problems. And if it's broken beyond repair, it's not the end of the world. Just reinstall and use your backups. You do have a backup, right?

