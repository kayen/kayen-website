# Kayen Website CI Documentation

## Login to concourse
```
fly -t ci login -n TEAM_NAME -c CONCOURSE_URL
```


## Create or update a pipeline
```
fly -t ci set-pipeline -p kayen-website -c config/pipelines/review.yml -n
```
