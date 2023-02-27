# Angular15SassIssue

To reproduce the issue, run the following commands:

```
docker build -f tools/Dockerfile -t build:v3 . --no-cache --progress=plain
```

It mind require multiple times until you get the issue.