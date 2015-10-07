# Allrpm
Outputting graph of RPM repositories for visualization github.com/anvaka/pm.

## Usage
The `download.sh` script allows one to fetch arbitrary system repository information via the DNF `repograph` plugin:

```
$ ./download.sh fedora
```

Creates a graph in Dot format of `fedora` repository. Note that DNF has to *know* about the given repository id, so if you want to create a `CentOS` graph from Fedora, you'll have to add CentOS repositories to `/etc/yum.repos.d/`.

