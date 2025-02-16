# 5915Eviction2
JusticeTech capstone project repository. 

Technical [README](./docs/TechDetailsHome.md) and external documentation

## Flow Chart
flowchart TD
    A[Start] --> B(Landing page)
    B --> D{Do you have an eviction notice?}
    B --> G(General Resources)
    G --> H(FAQs)
    G --> I(Resource landing & search)
    D --> yes --> C(Decision Tree)
    D --> no --> L(Learning page)
    L --> G


    J[decision tree] --> K{Do you have a 3 or 30 day notice?}
    K --> M(30 day) 
    K --> N(3 day) 
    M --> O{Subsidised housing?} --> yes30day --> legal-aid-society
    O --> no30day --> ?
    N --> O --> yes3day --> notice-incorrect-statement --> legal-aid-society
    O --> no3day --> R(Mediation app pointer with learning info)
    R --> S{did you successfully mediate}
    S --> noMediation --> court-specific-info --> rental-assistance-resources
    S --> yesMediation --> U(Congrats, but...)
    noMediation --> chat-bot
