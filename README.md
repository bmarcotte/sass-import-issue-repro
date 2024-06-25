# sass-import-issue-repro

To reproduce the issue, run the following command:

```
./run-tests.sh <number-of-test-batches-to-run>
```

If no number is given, the default is to run 10 batches of 2 test builds each (one using Node 16, one using Node 18).  In my largest script run, I saw 11 failures out of 200 builds (i.e. 100 batches of 2 builds each), so about a 5.5% failure rate.

After the script completes, you can find log files under the ./logs/ directory.

This repo was originally forked from:

  https://github.com/Carniatto/angular15SaasIssue

...and then I layered on a Bash script and docker configuration to help with automating testing large numbers of builds.