VERSION := $(shell cat VERSION)
IMAGE   := gcr.io/helios-devel/kayen-website:$(VERSION)

.PHONY: default build push run ci deploy

default: build run

build:
	@echo '> Building "kayen-website" docker image...'
	@docker build -t $(IMAGE) .

push: build
	gcloud docker -- push $(IMAGE)

run:
	@echo '> Starting "kayen-website" container...'
	@docker run -d $(IMAGE)

ci:
	@fly -t ci set-pipeline -p kayen-website -c config/pipelines/review.yml --load-vars-from config/pipelines/secrets.yml -n
	@fly -t ci unpause-pipeline -p kayen-website

deploy: push
	@helm install ./config/charts/kayen-website --set "image.tag=$(VERSION)"
