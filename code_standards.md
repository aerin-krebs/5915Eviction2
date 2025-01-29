## Code Quality Checklist

- [ ] Variable names are clear and concise
- [ ] Functions contain header descriptions
- [ ] Follows solid design principle
- [ ] Does not have triple+ nested loops - minimize cyclomatic complexity
- [ ] Follows google style guide

## Codebase Design Checklist

- [ ] Code does not add a "master" component
- [ ] Code copied for the third time has been extracted
- [ ] Avoids unessesary seperating into smart + dumb components (presentation and controller)
- [ ] Minimizes prop drilling - (inheretance through parent from grandparent to children)
