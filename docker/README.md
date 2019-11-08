# Exercism Environments #

Rather than have to set up each environment, use Docker containers in interactive
mode with the directory for the language mounted.

The Docker container images need to be built before they can be used - starting with
the `base` container image that the others are built `FROM`.

```shell
cd base && sh build.sh <TOKEN>
```

This will build the `exercism:base` image.

The `base` container image has `exercism` CLI installed and configured for the
provided CLI token.

Once this has been built, language specific environments can be built extending
from this. For example:

```shell
cd lua && sh build.sh
```

This will build the `exercism:lua` image.

This can now be used to develop in Lua:

```shell
cd ../lua && sh develop.sh
```

This will start an interactive terminal, which can run the language test commands.

```shell
cd lua/hello-world && busted .
```
