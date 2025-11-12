subgraph Canais e Relacionamento
        E1 --> C1(Canal: Venda Direta/B2B);
        E1 --> R1(Relacionamento: Consultoria Regulatória, Relatório ESG e Gestão de Coleta);
        
        E2 --> C2(Canal: Rede de Ecopontos Implantados);
        E2 --> R2(Relacionamento: Suporte Pedagógico STEM, Engajamento Contínuo e Treinamento In Loco);
        
        E3 --> C3(Canal: Parceria Estratégica Turn-Key);
        E3 --> R3(Relacionamento: Logística Plug-and-Play, Co-Branding e Apoio na Conscientização);
    end
    
    subgraph Base do Negócio
        P(PARCEIROS PRINCIPAIS: Fabricantes/Importadores de Pilhas, Grandes Varejistas, Instituições de Fomento, Governos Locais);
        F(FONTES DE RECEITA: Licenciamento, Patrocínio Exclusivo e Venda de Serviço de Coleta/Consultoria);
    end

    C1 --> R1;
    C2 --> R2;
    C3 --> R3;

    style R1 fill:#d3f6d3,stroke:#3c803c,stroke-width:2px;
    style R2 fill:#d3f6d3,stroke:#3c803c,stroke-width:2px;
    style R3 fill:#d3f6d3,stroke:#3c803c,stroke-width:2px;
    style E1 fill:#f9d3f9,stroke:#9c3c9c,stroke-width:2px;
    style E2 fill:#f9d3f9,stroke:#9c3c9c,stroke-width:2px;
    style E3 fill:#f9d3f9,stroke:#9c3c9c,stroke-width:2px;
    
    P --> C;
    F --> C;
    C --> O(RESULTADO/IMPACTO: Cumprimento Legal, ODS 4, 9, 11, 12, 14, 15, 17);