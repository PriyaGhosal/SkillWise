## How to start Contributing and pull request

**1.**  Fork [this](https://github.com/PriyaGhosal/SkillWise.git) repository.

**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_name>/SkillWise.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd SkillWise
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/PriyaGhosal/SkillWise.git
```

**5.** Check the remotes for this repository.
```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it Updated from the latest updated/changes made in repository.

```
git pull upstream main
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.


**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repository you are supposed to make a PR to.


**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.


**14.** Click on `Create Pull Request`.


**15** Wait for it to be reviewed and accepted.
